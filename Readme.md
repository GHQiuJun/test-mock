### test-mock

- to mock our http test, test http request success send

### use

- npm start

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