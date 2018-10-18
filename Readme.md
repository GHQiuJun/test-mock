### test-mock

- to mock our http test, test http request success send

### use

- npm start

### docker run

- docker push qiujundocker/test-mock
- docker run -t -e PORT=12345 -p 12345:12345 qiujundocker/test-mock:1.0.0

### limit

- only support GET、POST、DELETE、PUT

### example

```$xslt
POST /test-mock/?a=1 HTTP/1.1
Host: 127.0.0.1:3005
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: 496a83b7-571f-7c3e-1fbf-a518015cfeb5

{
    "adset_id": "XXXX",
    "delivery_name": "XXXXX"
}
```