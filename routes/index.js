const express = require('express')
const router = express.Router()

router.get('/', function (req, res, next) {
  const me = {
    name: 'Henrik Fredriksson',
    email: 'hefa14@student.bth.se',
    description: `
    <h1>Välkommen!</h1>

    <p>
      Detta är min me- sida i kursen jsramverk på Blekinge Tekniska Högskola.
    </p>
    <p>
      Jag heter Henrik Fredriksson och är uppvuxen i Getinge
      som ligger mellan Halmstad och Falkenberg på västkusten.
      Efter att ha jobbat 2 år i en elektronikproduktion efter
      gymnasiet så flyttade jag till Karlshamn 2005 för att studera medieteknik på BTH.
      Efter några års studier började även att studera matematik.
      Jag blev klar med grundutbildningen sommaren 2013 och på hösten samma år började
      jag jobba på matematikinstitutionen på BTH, Karlskrona.
      Arbetet består i dagsläget mestadels av undervisning i grundläggande kurser i
      matematik för blivande civil - och högskoleingejörer.
      Jag forskar även delvis inom tillämpad matematik.Forskningen handlar om att finna
      matematiska modeller för att strategiskt placera ut mätstationer för att effektivt mäta trafikflöden.
    </p>
    <p>
      Nu har dock intresset att börja studera börjat vakna igen
      och har därför börjar studera webbprogrammering på BTH.
      Programmeringintresset har de senaste åren gått lite i vågor,
      men återkommer med jämna mellan i både arbete och fritidsintresse.
      Har de senaste åren mest jobbat med matematiska programvaror
      som Matlab, Mathematica och Sage, men
      har sedan tidigare erfarenhet av bland annat C++ och Java.
    </p>
    <p>
      När jag inte jobbar eller studerar så ägnas övrig tid åt idrott.Jag är bland annat ledare för
      ett ungdomslag i Karlskrona Handboll.Helgerna spenderas därför oftast i en inomhushall
      någonstans i Blekinge eller Småland.Helst en med kaffekopp i ena handen.
    </p>
    `
  }

  res.json(me)
})

module.exports = router
