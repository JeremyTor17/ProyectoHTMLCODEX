import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;


// CONFIGURACIÓN EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


// ARCHIVOS ESTÁTICOS
app.use(express.static(path.join(__dirname, "public")));


// DATOS DINÁMICOS (SERVICES)
const services = [

{
title: "Building Construction",
description: "Construcción profesional moderna",
img: "/img/service-1.jpg"
},

{
title: "House Renovation",
description: "Renovación completa de viviendas",
img: "/img/service-2.jpg"
},

{
title: "Architecture Design",
description: "Diseños arquitectónicos innovadores",
img: "/img/service-3.jpg"
},

{
title: "Interior Design",
description: "Diseño interior personalizado",
img: "/img/service-4.jpg"
},

{
title: "Fixing & Support",
description: "Soporte técnico especializado",
img: "/img/service-5.jpg"
},

{
title: "Painting",
description: "Servicios profesionales de pintura",
img: "/img/service-6.jpg"
}

];


// RUTAS

app.get("/", (req, res) => {

res.render("index", {

title: "Inicio | Builderz",

services

});

});


app.get("/about", (req, res) => {

res.render("about", {

title: "About | Builderz"

});

});


app.get("/service", (req, res) => {

res.render("service", {

title: "Service | Builderz"

});

});


app.get("/team", (req, res) => {

res.render("team", {

title: "Team | Builderz"

});

});


app.get("/portfolio", (req, res) => {

res.render("portfolio", {

title: "Portfolio | Builderz"

});

});


app.get("/blog", (req, res) => {

res.render("blog", {

title: "Blog | Builderz"

});

});


app.get("/single", (req, res) => {

res.render("single", {

title: "Single | Builderz"

});

});


app.get("/contact", (req, res) => {

res.render("contact", {

title: "Contact | Builderz"

});

});


// SERVIDOR

app.listen(PORT, () => {

console.log(`Servidor corriendo en puerto ${PORT}`);

});