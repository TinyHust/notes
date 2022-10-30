## merge, embed pdf

```javascript
const fs = require("fs");
const { PDFDocument } = require("pdf-lib");

const mergePDF = async () => {
  const firstDonorPdfBytes = fs.readFileSync(
    `${process.cwd()}/with_update_sections.pdf`
  );

  const secondDonorPdfBytes = fs.readFileSync(
    `${process.cwd()}/with_large_page_count.pdf`
  );

  const firstDonorPdfDoc = await PDFDocument.load(firstDonorPdfBytes);
  const secondDonorPdfDoc = await PDFDocument.load(secondDonorPdfBytes);

  const pdfDoc = await PDFDocument.create();

  const [firstDonorPage] = await pdfDoc.copyPages(firstDonorPdfDoc, [0]);
  const [secondDonorPage] = await pdfDoc.copyPages(secondDonorPdfDoc, [742]);

  const thirdDonorPage = await pdfDoc.embedPage(
    secondDonorPdfDoc.getPages()[1]
  );
  // Add the first copied page
  const page = pdfDoc.addPage(firstDonorPage);

  const thirdDonorPageDims = thirdDonorPage.scale(1);
  page.drawPage(thirdDonorPage, {
    ...thirdDonorPageDims,
    x: page.getWidth() / 2 - thirdDonorPageDims.width / 2,
    y: page.getHeight() - thirdDonorPageDims.height - 150,
  });

  pdfDoc.insertPage(0, secondDonorPage);

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync("./test.pdf", pdfBytes);
};

mergePDF();
```