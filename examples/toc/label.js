const repos = "TinyHust/notes";
const baseUrl = `https://api.github.com/repos/${repos}/`;
const totalPage = 10;
const commentId = "DC_kwDOFT7WW84ApISq";

const fetchLabels = async () => {
  const promises = [];
  const labels = [];

  for (var i = 1; i <= totalPage; i++) {
    promises.push(
      fetch(`${baseUrl}labels?page=${i}&per_page=100`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.TOC_TOKEN}`,
          "X-GitHub-Api-Version": "2022-11-28",
        },
      })
    );
  }

  const responses = await Promise.all(promises);

  for (var i = 0; i < responses.length; i++) {
    labels.push(...(await responses[i].json()));
  }

  return labels;
};

const buildLabelList = (labels) => {
  const baseDiscussUrl = `https://github.com/${repos}/discussions?discussions_q=`;

  let badges = [];

  for (let i = 0; i < labels.length; i++) {
    const label = labels[i];

    const query = encodeURIComponent(`label:"${label.name}"`);

    const link = `${baseDiscussUrl}${query}`;

    const badge = `[![${
      label.name
    }](https://img.shields.io/github/discussions-search/${repos}?query=${query}&style=for-the-badge&labelColor=%23${
      label.color
    }&label=${encodeURIComponent(label.name)})](${link})`;

    badges.push(badge);
  }

  return badges.join(" ");
};

const updateDiscussionComment = async (content) => {
  const data = JSON.stringify({
    query: `mutation {
      updateDiscussionComment(input: {
          body: "${content}", 
          commentId: "${commentId}"
        }
      ) {
        comment {
          id,
          body
        }
      }
    }`,
  });

  await fetch("https://api.github.com/graphql", {
    method: "POST",
    body: data,
    headers: {
      Authorization: `Bearer ${process.env.TOC_TOKEN}`,
    },
  });
};

const updateTOC = async () => {
  const labels = await fetchLabels();
  const content = buildLabelList(labels);
  await updateDiscussionComment(content);
};

updateTOC();
