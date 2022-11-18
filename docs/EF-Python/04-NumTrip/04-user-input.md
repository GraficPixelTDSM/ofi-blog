---
sidebar_custom_props:
  id: ff5ad3cd-fa0f-4566-b030-1b6d8f17203c
---

# Spielstart & Eingabe

Nun wird's interaktiv 🥳 Eine Gamer:in soll ein Feld auswählen können.

![--width=500px](images/numtrip-field-select.gif)

:::danger Nur Felder auswählen
Die Gefahr bei diesem Schritt lauert im inneren Bedürfnis, in diesem ersten Schritt bereits an alles zu Denken und das ganze Spiel zu programmieren!

:mdi-flash-triangle--red: in diesem Schritt **nicht gefragt** :mdi-flash-triangle--red::
- :mdi-close-circle--red: die Eingabe auf ungültige Eingaben überprüfen
- :mdi-close-circle--red: ausgewählte Felder zusammenrechnen
- :mdi-close-circle--red: den Spielstand angebe
- :mdi-close-circle--red: überprüfen, ob das Spiel vorbei ist
- :mdi-close-circle--red: Sound hinzufügen
- :mdi-close-circle--red: ...
:::


:::aufgabe Spielstart und Eingabe
<Answer type="state" webKey="576e4753-05b6-4a83-90da-b44cf8e8eb69" />

1. Nur eine einzelne Eingabe einlesen und das Feld nicht mehr anzeigen... __Commit & Push__

    <Hint>

    1. Eingabe
    2. Koordinaten auslesen
    3. Im Spielfeld das ausgewählte Feld markieren
    4. Aktualisiertes Spielfeld anzeigen (markiertes Feld soll leer sein)
        
    </Hint>
    <br />

2. Eingabe und Auswerten der Eingabe in separate Funktionen verschieben und nun diese Funktionen aufrufen... __Commit & Push__
3. Eine Funktion `play` o.ä. schreiben, welche solange das Spiel läuft (vorerst also unendlich lange!) den ersten Schritt wiederholt...  __Commit & Push__

    <Hint>

    Weiss man nicht im voraus, wie oft etwas wiederholt wird, so ist es immer ein Hinweis, dass eine `while` Schleife verwendet werden sollte.

    Hier eine, die unendlich lange läuft (bis man [[Ctrl]] + [[c]] drückt):

    ```py
    while True:
        eingabe()
        auswerten()
        show()
    ```

    </Hint>
    <br />

4. Code nochmals kurz durchgehen - machen Variablen- und Funktionsnamen Sinn? Könnten gewisse Dinge einfacher verständlich ($$\neq$$ weniger Code) geschrieben werden? Braucht es allenfalls irgendwo noch eine weitere Funktion?... __Commit & Push__
5. Kurzer Blog-Eintrag in Form eines Lernjournals - was haben Sie gemacht (evtl. mit Screenshot), wie spielen die Funktionen zusammen? 
:::
