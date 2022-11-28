# Fake store api

![alt text](https://github.com/MMR-Solutions-AB/Kanban-V15/raw/main/logo.png)

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
