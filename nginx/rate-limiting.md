# rate limiting

REF:

- [https://www.nginx.com/blog/rate-limiting-nginx/](https://www.nginx.com/blog/rate-limiting-nginx/)
- [https://vietnix.vn/huong-dan-cau-hinh-nginx-rate-limit/](https://vietnix.vn/huong-dan-cau-hinh-nginx-rate-limit/)

```
geo $limit {
    default 1;
    10.0.0.0/8 0;
    192.168.0.0/24 0;
}

map $limit $limit_key {
    0 "";
    1 $binary_remote_addr;
}

http {
    # ...

    limit_req_zone $limit_key zone=req_zone:10m rate=5r/s;
    limit_req_zone $binary_remote_addr zone=req_zone_wl:10m rate=15r/s;

    server {
        # ...
        location / {
            limit_req zone=req_zone burst=10 nodelay;
            limit_req zone=req_zone_wl burst=20 nodelay;
            # ...
        }
    }
}
```
