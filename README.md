# Fake store api

![alt text](./logo.png)

## Det här är er andra uppgift att göra efter ni har gjort klar [vecka-10-fredag-challenge-2](https://github.com/MMR-Solutions-AB/fake-store-api/tree/vecka-10-fredag-challenge-2) branchen.

## Vad ska ni göra?

Ni ska nu bygga vidare på det genom att lägga till en **GET** end-point för **/carts** som hämtar alla **carts** efter ni har använt **Cart.populate** för att få information om alla produkter i varje **cart**

### Så här skulle en **cart** kunna se ut, ni ska alltså returnera en array av exemplet nedan

```json
{
    "_id": "62f14e8093385a718f7b4a2a",
    "products": [
      {
        "product": {
          "_id": "62eeb638b7333a09ce969fec",
          "name": "Varmkorv",
          "price": 12.5,
        },
        "numberOfProducts": 89,
        "_id": "62f14e8093385a718f7b4a2b"
      },
      {
        "product": {
          "_id": "62eeb645b7333a09ce969fef",
          "name": "Pizza",
          "price": 104.99,
        },
        "numberOfProducts": 69,
        "_id": "62f14e8093385a718f7b4a2c"
      }
    ]
},
```

### Ifall du behöver hjälp

-   [Mongoose populate docs](https://mongoosejs.com/docs/populate.html)
-   Boka handledning på [Calendly](https://calendly.com)
-   [MongoDB på 30 minuter](https://youtu.be/ofme2o29ngU)
-   [Mongoose på 30 minuter](https://youtu.be/DZBGEVgL2eE)
