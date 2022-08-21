## stripe
- [testing card](https://stripe.com/docs/testing)
- [stripe-cli](https://stripe.com/docs/stripe-cli)
  - download stripe.exe, run command
  - ./stripe listen --api-key sk_test_5D7jdaQAZjwREnRwgVamciQO00qaljp0Uk --forward-to localhost:3000/webhook
  - use in docker: docker run --rm -it stripe/stripe-cli listen --api-key sk_test_5D7jdaQAZjwREnRwgVamciQO00qaljp0Uk --forward-to localhost:3000/webhook
- [rate limit](https://stripe.com/docs/rate-limits)
- [js docs](https://stripe.com/docs/js)