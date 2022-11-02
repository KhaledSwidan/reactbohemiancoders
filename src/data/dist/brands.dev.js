"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var brands = [{
  "char": "a",
  "id": "brnd1",
  "brand": "ACM",
  "brandName": "Sebionex trio anti-imperfections cream 40ml",
  "brandDetails": {
    brand: "Sebionex",
    itemForm: "Cream",
    categoryType: "Face",
    recommendedUse: "Moisturiser",
    numberOfItems: 1,
    skinType: "All Skin Type",
    itemVolume: "40 Milliliters",
    itemWeight: "0.05 Kilograms",
    itemDimensions: "12.6 x 5 x 6 centimeters",
    aboutItem: "Cream for Oily Skin with Imperfections - Face. Corrects imperfections and limits appearance. Moisturises, soothes and regulates the production of sebum. Leaves skin hydrated, smooth and purified. Good foundation for make-up"
  },
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/acm.webp")
}, {
  "char": "a",
  "id": "brnd2",
  "brandName": "Aroma",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/aroma.webp")
}, {
  "char": "a",
  "id": "brnd3",
  "brandName": "Africana",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/africana.webp")
}, {
  "char": "a",
  "id": "brnd4",
  "brandName": "Argan Z",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/arganz.webp")
}, {
  "char": "a",
  "id": "brnd5",
  "brandName": "Anivagene",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/anivagene.webp")
}, {
  "char": "a",
  "id": "brnd6",
  "brandName": "Always",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/always.webp")
}, {
  "char": "a",
  "id": "brnd7",
  "brandName": "Amma Care",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/ammacare.webp")
}, {
  "char": "a",
  "id": "brnd8",
  "brandName": "Avene",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/avene.webp")
}, {
  "char": "a",
  "id": "brnd9",
  "brandName": "Avent",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/avent.png")
}, {
  "char": "b",
  "id": "brnd10",
  "brandName": "B.Neotra",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/bneotra.webp")
}, {
  "char": "b",
  "id": "brnd11",
  "brandName": "Baby Joy",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/babyjoy.jpg")
}, {
  "char": "b",
  "id": "brnd12",
  "brandName": "Bel Clinic",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/belclinic.jpg")
}, {
  "char": "b",
  "id": "brnd13",
  "brandName": "Beurer",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/beurer.jpg")
}, {
  "char": "b",
  "id": "brnd14",
  "brandName": "Bio Balance",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/biobalance.png")
}, {
  "char": "b",
  "id": "brnd15",
  "brandName": "Bio Organic",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/bioorganic.webp")
}, {
  "char": "b",
  "id": "brnd16",
  "brandName": "Bio-Derma",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/bioderma.jpg")
}, {
  "char": "b",
  "id": "brnd17",
  "brandName": "Bless",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/bless.png")
}, {
  "char": "b",
  "id": "brnd18",
  "brandName": "Braun",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/braun.png")
}, {
  "char": "b",
  "id": "brnd19",
  "brandName": "Bubblzz",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/bubblzz.jpg")
}, {
  "char": "c",
  "id": "brnd20",
  "brandName": "CHI",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/chi.png")
}, {
  "char": "c",
  "id": "brnd21",
  "brandName": "Clean & Clear",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/clean&clear.png")
}, {
  "char": "c",
  "id": "brnd22",
  "brandName": "Clear",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/clear.jpg")
}, {
  "char": "c",
  "id": "brnd23",
  "brandName": "CLEO",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/cleo.webp")
}, {
  "char": "d",
  "id": "brnd24",
  "brandName": "Dabur Amla",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/daburamla.webp")
}, {
  "char": "d",
  "id": "brnd25",
  "brandName": "DAX",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/dax.png")
}, {
  "char": "d",
  "id": "brnd26",
  "brandName": "Dermatique",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/dermatique.png")
}, {
  "char": "d",
  "id": "brnd27",
  "brandName": "Dove",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/Dove.webp")
}, {
  "char": "d",
  "id": "brnd28",
  "brandName": "Dr Brown",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/drbrown.png")
}, {
  "char": "d",
  "id": "brnd29",
  "brandName": "Ducray",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/ducray.webp")
}, {
  "char": "d",
  "id": "brnd30",
  "brandName": "Durex",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/durex.jpg")
}, {
  "char": "e",
  "id": "brnd31",
  "brandName": "Easy Care",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/easycare.webp")
}, {
  "char": "e",
  "id": "brnd32",
  "brandName": "ECO",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/eco.webp")
}, {
  "char": "e",
  "id": "brnd33",
  "brandName": "Enliven",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/enliven.webp")
}, {
  "char": "e",
  "id": "brnd34",
  "brandName": "EVA",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/eva.webp")
}, {
  "char": "f",
  "id": "brnd35",
  "brandName": "Fine Care",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/finecare.webp")
}, {
  "char": "g",
  "id": "brnd36",
  "brandName": "Garnier",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/garnier.webp")
}, {
  "char": "g",
  "id": "brnd37",
  "brandName": "Gillette",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/gillette.jpg")
}, {
  "char": "g",
  "id": "brnd38",
  "brandName": "GK Keratin",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/gk.webp")
}, {
  "char": "g",
  "id": "brnd39",
  "brandName": "Gliss",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/gliss.jpg")
}, {
  "char": "g",
  "id": "brnd40",
  "brandName": "Glysolid",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/glysolid.webp")
}, {
  "char": "h",
  "id": "brnd41",
  "brandName": "Hayah",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/hayah.webp")
}, {
  "char": "h",
  "id": "brnd42",
  "brandName": "Head & Shoulders",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/head&sholder.jpg")
}, {
  "char": "h",
  "id": "brnd43",
  "brandName": "Herbal",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/herbal.webp")
}, {
  "char": "i",
  "id": "brnd44",
  "brandName": "IDEAL",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/ideal.png")
}, {
  "char": "i",
  "id": "brnd45",
  "brandName": "ISIS",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/isis.webp")
}, {
  "char": "i",
  "id": "brnd46",
  "brandName": "Infinity",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/infinity.webp")
}, {
  "char": "j",
  "id": "brnd47",
  "brandName": "J&J",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/j&j.gif")
}, {
  "char": "k",
  "id": "brnd48",
  "brandName": "Kaminomoto",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/kaminomoto.jpg")
}, {
  "char": "k",
  "id": "brnd49",
  "brandName": "Korloff",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/korloff.png")
}, {
  "char": "l",
  "id": "brnd50",
  "brandName": "La Roche",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/larocheposay.webp")
}, {
  "char": "l",
  "id": "brnd51",
  "brandName": "Labello",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/labello.png")
}, {
  "char": "l",
  "id": "brnd52",
  "brandName": "LifeBuoy",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/lifebuoy.jpg")
}, {
  "char": "l",
  "id": "brnd53",
  "brandName": "Loreal",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/loreal.png")
}, {
  "char": "l",
  "id": "brnd54",
  "brandName": "Lux",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/lux.webp")
}, {
  "char": "m",
  "id": "brnd55",
  "brandName": "Mustela",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/mustella.jpg")
}, {
  "char": "n",
  "id": "brnd56",
  "brandName": "Neutrogena",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/neutgrogena.png")
}, {
  "char": "n",
  "id": "brnd57",
  "brandName": "Nike",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/nike.png")
}, {
  "char": "n",
  "id": "brnd58",
  "brandName": "Nivea",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/nivea.png")
}, {
  "char": "n",
  "id": "brnd59",
  "brandName": "Nuby",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/nuby.png")
}, {
  "char": "n",
  "id": "brnd60",
  "brandName": "NUXE",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/nux.png")
}, {
  "char": "o",
  "id": "brnd61",
  "brandName": "OLAY",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/olay.webp")
}, {
  "char": "o",
  "id": "brnd62",
  "brandName": "ORAL-B",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/oralb.png")
}, {
  "char": "o",
  "id": "brnd63",
  "brandName": "ORANGE DAILY",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/orange.png")
}, {
  "char": "o",
  "id": "brnd64",
  "brandName": "ORS",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/ors.png")
}, {
  "char": "o",
  "id": "brnd65",
  "brandName": "Organic SPA",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/organicspa.jpg")
}, {
  "char": "p",
  "id": "brnd66",
  "brandName": "Palmer's",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/palmers.png")
}, {
  "char": "p",
  "id": "brnd67",
  "brandName": "Pampers",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/pampers.png")
}, {
  "char": "p",
  "id": "brnd68",
  "brandName": "Pantene",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/pantene.png")
}, {
  "char": "p",
  "id": "brnd69",
  "brandName": "Penduline",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/penduline.png")
}, {
  "char": "p",
  "id": "brnd70",
  "brandName": "Pharmaceris",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/pharmaceris.png")
}, {
  "char": "p",
  "id": "brnd71",
  "brandName": "Philips",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/philips.png")
}, {
  "char": "r",
  "id": "brnd72",
  "brandName": "Rexsol",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/rexsol.png")
}, {
  "char": "r",
  "id": "brnd73",
  "brandName": "Rilastil",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/rilastil.png")
}, {
  "char": "s",
  "id": "brnd74",
  "brandName": "Sandacare",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/sandacare.jpg")
}, {
  "char": "s",
  "id": "brnd75",
  "brandName": "Sanosan",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/sanosan.png")
}, {
  "char": "s",
  "id": "brnd76",
  "brandName": "Skin Code",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/skincode.jpg")
}, {
  "char": "s",
  "id": "brnd77",
  "brandName": "Sunsilk",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/sunsilk.webp")
}, {
  "char": "s",
  "id": "brnd78",
  "brandName": "SVR",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/svr.png")
}, {
  "char": "t",
  "id": "brnd79",
  "brandName": "Topicrem",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/topicream.png")
}, {
  "char": "t",
  "id": "brnd80",
  "brandName": "Tresemme",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/tresemme.png")
}, {
  "char": "t",
  "id": "brnd81",
  "brandName": "Trichup",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/trichup.png")
}, {
  "char": "u",
  "id": "brnd82",
  "brandName": "URIAGE",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/uriage.png")
}, {
  "char": "v",
  "id": "brnd83",
  "brandName": "Vatika",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/vatika.jpg")
}, {
  "char": "v",
  "id": "brnd84",
  "brandName": "VICHY",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/vichy.jpg")
}, {
  "char": "y",
  "id": "brnd85",
  "brandName": "Yves Rocher",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/yvv.png")
}, {
  "char": "z",
  "id": "brnd86",
  "brandName": "Zero Frizz",
  "brandDetails": "معلومات عن المنتج",
  "updateTime": "20 / 5 / 2022",
  "price": 50,
  "imgSrc": require("../components/imgs/zerofrizz.png")
}];
var _default = brands;
exports["default"] = _default;
//# sourceMappingURL=brands.dev.js.map
