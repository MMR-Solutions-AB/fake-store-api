# Fake store api

![alt text](https://github.com/MMR-Solutions-AB/Kanban-V15/raw/main/logo.png)

## Det här är er andra uppgift att göra efter ni har gjort klar [vecka-10-fredag-challenge-1](https://github.com/MMR-Solutions-AB/fake-store-api/tree/vecka-10-fredag-challenge-1) branchen

## Vad ska ni göra?

Ni ska skapa en ny **POST** end-point för **/cart**, denna route förväntar sig att få en **req.body** som följer strukturen nedan. Du ska skapa en ny cart med det som skickas in via **req.body** sedan ska du skicka tillbaka den nyligen skapade produkten med hjälp utav **res.json**

### Så här skulle en **req.body** kunna se ut för att skapa en ny **Cart**

```json
{
    "products": [
        {
            "product": "62eeb638b7333a09ce969fec", // id till en produkt
            "numberOfProducts": 1
        },
        {
            "product": "62eeb645b7333a09ce969fef",
            "numberOfProducts": 8
        }
    ]
}
```

### Ifall du behöver hjälp

-   [Mongoose populate docs](https://mongoosejs.com/docs/populate.html)
-   Boka handledning på [Calendly](https://calendly.com)
-   [MongoDB på 30 minuter](https://youtu.be/ofme2o29ngU)
-   [Mongoose på 30 minuter](https://youtu.be/DZBGEVgL2eE)
