# Fake store api

![alt text](https://scontent-arn2-1.xx.fbcdn.net/v/t1.6435-9/179724720_5733102616707605_5196641357823965706_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-7&_nc_sid=8631f5&_nc_ohc=Q3q-7FGRFNgAX-QkibL&_nc_ht=scontent-arn2-1.xx&oh=00_AT-wm686oGi8eCUJrLPQLYZf5o2jb6vLPE8FcEzKoQzlyw&oe=6313F3BB)

## Detta är den första versionen av ett simpelt REST API gjord med tre end-points:

-   **GET /products** - svarar med alla produkter som finns
-   **GET /products/:id** - svarar med en produkt med samma id. Om det inte finns någon produkt samma id så svarar detta API med ett 404 error
-   **POST /product** - skapar en ny produkt. Förväntar två keys skickade med requesten, **name** i form av en sträng för namnet på den nya produkten och **price** i form av ett nummer för priset på den nya produkten

## Använda teknologier

-   JavaScript
-   Node
-   Express
-   CORS
-   env variabler

Detta projekt kommer byggas på nästa vecka när ni kommer ha lärt er MongoDB och Mongoose
