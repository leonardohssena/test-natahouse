# Test - Nata.House
> Projeto criado para o processo seletivo da empresa Nata.House.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3001
npm run local

# serve for production
npm run start
```
## Endpoint
``` bash
# Base URL
http://localhost:3001/api/v1

# Token
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGVzdCAtIE5hdGEuSG91c2UiLCJpYXQiOjk5OTk5OTk5OTk5OX0.6eG6WgVtRFPp9rwn-ophSUr-RqN9X4X5VEc8yhFmKd0

# Get Stops
http://localhost:3001/api/v1/starship/stops?mglt=1000000&page=4&limit=5
- mglt: Distancia em mega lights (MGLT) para calculo
- page (opcional): Página a ser consultada
- limit (opcional): Número máximo de resultados por página
```