---
sidebar_custom_props:
  id: a241d178-8c66-4f90-9469-8ca558bd7a26
---

# VS Code 1.59

import OsTabs from '@site/src/components/OsTabs'


# VS Code

> Visual Studio Code (kurz VS Code) ist ein kostenloser und Quelloffener Editor von Microsoft. VS Code ist plattformübergreifend für die Betriebssysteme Windows, macOS und Linux verfügbar. [^1]


## Installieren

1. Unter [https://code.visualstudio.com/](https://code.visualstudio.com/Download) die aktuelle Version von Python herunterladen. 
    - Surface Pro X -> `ARM`
    - Windows -> `64 bit`
    - Mac mit M1 Chip -> `Apple Silicon`
    - Mac OS -> `Intel Chip`
    ![Download Optionen](images/vscode-download.png)
2. Die heruntergeladene Datei doppelklicken
3. Folgende Optionen bei der Installation berücksichtigen:

<details>
<summary>Installations-Optionen</summary>
<OsTabs>
<TabItem value="win10">

1. Schritt: ![Installationsschritt 1.](images/win-01.png)
2. Schritt: ![Installationsschritt 2.](images/win-02.png)
3. Schritt: ![Installationsschritt 3.](images/win-03.png)
4. Schritt: ![Installationsschritt 4.](images/win-04.png)
5. Schritt: ![Installationsschritt 5.](images/win-05.png)
6. Schritt: ![Installationsschritt 6.](images/win-06.png)
7. Schritt: ![Installationsschritt 7.](images/win-07.png)
5. Fertig 🥳

</TabItem>
<TabItem value="mac">

1. Die heruntergeladene Datei ist eine komprimierte `.zip`-Datei - nach dem Doppelklicken befindet sich im Download-Ordner eine Datei `Visual Studio Code.app``
2. Die Datei `Visual Studio Code.app` in den Ordner "Programme" ziehen.
3. Beim ersten Öfnnen kommt folgender Hinweis:
    ![Installationsschritt 3.](images/osx-01.png)
4. Fertig 🥳

</TabItem>
</OsTabs>
</details>

---

## Konfigurieren

Damit die richtigen Voreinstellungen geladen werden, muss eine Erweiterung, ein sog. Plugin, installiert werden. Unter `Erweiterungen` nach dem Plugin **gbsl-informatik** suchen und dieses installieren.

![VS Code Plugins](images/vscode-plugins.png)

### Python Interpreter

Um Python-Programme auszuführen, ist ein Übersetzer der Befehle zu Maschinenverständlichem Code notwendig. Diese Aufgabe übernimmt der **Python Interpreter**. Auf einem Gerät sind meist mehrere verschiedene Python-Interpreter installiert - in VS Code soll aber der von uns installierte Interpreter verwendet werden:

<OsTabs>
<TabItem value="win10">

:::info
Es muss immer überprüft werden, dass der von uns installierte Interpreter ausgewählt ist.
:::

![Interpreter Auswählen](images/win-configure-python-interpreter.png)

</TabItem>
<TabItem value="mac">

:::info
Der **zuletzt** installierte Python-Interpreter ist jeweils unter `/usr/local/bin/python3` (in der zweiten Zeile vermerkt) verfügbar. Es muss immer überprüft werden, dass dieser Interpreter ausgewählt ist.
:::

![Interpreter Auswählen](images/osx-configure-python-interpreter.png)

<details>
<summary>Eine andere Version verwenden</summary>

Unter `/Library/Frameworks/Python.framework/Versions/` sind alle Python-Versionen verfügbar. Beim Konfigurieren des Interpreters kann über `Enter interpreter path...` auch dieser Pfad angegeben werden.

Beispiel-Pfad für die Version 3.9:

```sh
/Library/Frameworks/Python.framework/Versions/3.9/bin/python3.9
```

</details>

</TabItem>
</OsTabs>

<details>
<summary>Welcher Interpreter wird aktuell verwendet?</summary>

Mit folgendem Python-Programm kann man herausfinden, wo sich der Python Interpreter befindet:

```py
import sys
print(sys.executable)
```

</details>


## Verwenden

In VS Code lassen sich einzelne Dateien oder Ordner öffnen. Damit alle relevanten Dateien beim Ausführen von Python-Programmen von VS Code gefunden werden, sollten immer ganze Ordner geöffnet werden.


### 1. Wo ist was?

Alle im moment geöffneten Programme sind auf der linken Seite im Dateiexplorer zu sehen.

![](images/03_workbench.png)


### 2. Python Befehle ausprobieren

![](images/05_ipython.png)

### 3. Einen Ordner öffnen

Öffnen Sie jeweils einen ganzen Ordner, in welchem sich Ihre Python Scripts befinden.

![](images/01_open_folder.png)

### 4. Ein neues Python Script erstellen

Um ein neues Python Script hinzuzufügen, klicken Sie "New File". Wichtig: **Die Dateiendung des Skripts muss `.py` sein!**

![](images/02_create_file.png)


### 5. Einzelne Programm-Schritte nachvollziehen (debuggen)

![](images/04_debug.png)



[^1]: Quelle: [wikipedia](https://de.wikipedia.org/wiki/Visual_Studio_Code)
