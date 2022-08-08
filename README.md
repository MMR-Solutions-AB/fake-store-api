# Fake store api

![alt text](https://scontent-arn2-1.xx.fbcdn.net/v/t1.6435-9/179724720_5733102616707605_5196641357823965706_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-7&_nc_sid=8631f5&_nc_ohc=Q3q-7FGRFNgAX-QkibL&_nc_ht=scontent-arn2-1.xx&oh=00_AT-wm686oGi8eCUJrLPQLYZf5o2jb6vLPE8FcEzKoQzlyw&oe=6313F3BB)

## Det här är er första uppgift att göra efter ni har gjort klar [vecka-10-fredag](https://github.com/MMR-Solutions-AB/fake-store-api/tree/vecka-10-fredag) branchen. Ni ska nu bygga vidare på det genom att lägga till en ny kollektion med mongoose och några end-points att gå med den nya kollektionen. Denna branch fokuserar **enbart** på att bygga en ny datatyp i mongoose, end-pointsen kommer i nästa branches

## Vad ska ni göra?

Ni ska skapa en ny fil med en mongoose model för en ny kollektion av **'Carts'**. Denna nya model ska representera en kundvagn ni ser på exempelvis online klädbutiker. **Cart** ska innehålla en enda key som heter **products** för alla produkter i vagnen, **products** ska vara en array av object som använder sig utav mongoose populate (ni hittar info populate i sektionen längst ner) för att refererar till en produkt i **products** kollektionen samt en key, **numberOfProducts**, för hur många av just den produkten som är valda

### Så här skulle en **Cart** kunna se ut i er MongoDB databas

```js
{
    _id: '62f12bf94a82324826f6e35e',
    products: [
        {
            product: {
                _id: '62eeb638b7333a09ce969fec',
                name: 'Varmkorv',
                price: 24.50,
            },
            numberOfProducts: 3,
            _id: '62f12bf94a82324826f6e35f',
        },
        {
            product: {
                _id: '62eeb645b7333a09ce969fef',
                name: 'pizza',
                price: 104.0,
            },
            numberOfProducts: 6,
            _id: '62f12bf94a82324826f6e360',
        },
    ],
}
```

### Ifall du behöver hjälp

-   [Mongoose populate docs](https://mongoosejs.com/docs/populate.html)
-   Boka handledning på [Calendly](https://calendly.com)
-   [MongoDB på 30 minuter](https://youtu.be/ofme2o29ngU)
-   [Mongoose på 30 minuter](https://youtu.be/DZBGEVgL2eE)
