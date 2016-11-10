/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/workbench/node/extensionHostProcess.nls.de", {
	"vs/base/common/processes": [
		"Fehler: Die Informationen zur ausführbaren Datei müssen einen Befehl vom Typ \"string\" definieren.",
		"Warnung: \"isShellCommand\" muss vom Typ \"boolean\" sein. Der Wert {0} wird ignoriert.",
		"Warnung: \"args\" muss vom Typ \"string[]\" sein. Der Wert {0} wird ignoriert.",
		"Warnung: \"options.cwd\" muss vom Typ \"string\" sein. Der Wert {0} wird ignoriert.",
	],
	"vs/base/common/severity": [
		"Fehler",
		"Warnung",
		"Info",
	],
	"vs/base/node/processes": [
		"Ein Shell-Befehl kann nicht auf einem UNC-Laufwerk ausgeführt werden.",
	],
	"vs/platform/extensions/common/abstractExtensionService": [
		"Fehler beim Aktivieren der Extension \"{1}\". Ursache: unbekannte Abhängigkeit \"{0}\".",
		"Fehler beim Aktivieren der Extension \"{1}\". Ursache: Fehler beim Aktivieren der Extension \"{0}\".",
		"Fehler beim Aktivieren der Extension \"{0}\". Ursache: mehr als 10 Ebenen von Abhängigkeiten (wahrscheinlich eine Abhängigkeitsschleife).",
		"Fehler beim Aktivieren der Extension \"{0}\": {1}.",
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"Gibt für VS Code-Erweiterungen die VS Code-Version an, mit der die Erweiterung kompatibel ist. Darf nicht \"*\" sein. Beispiel: ^0.10.5 gibt die Kompatibilität mit mindestens VS Code-Version 0.10.5 an.",
		"Der Herausgeber der VS Code-Extension.",
		"Der Anzeigename für die Extension, der im VS Code-Katalog verwendet wird.",
		"Die vom VS Code-Katalog zum Kategorisieren der Extension verwendeten Kategorien.",
		"Das in VS Code Marketplace verwendete Banner.",
		"Die Bannerfarbe für die Kopfzeile der VS Code Marketplace-Seite.",
		"Das Farbdesign für die Schriftart, die im Banner verwendet wird.",
		"Alle Beiträge der VS Code-Extension, die durch dieses Paket dargestellt werden.",
		"Legt die Erweiterung fest, die im Marketplace als Vorschau gekennzeichnet werden soll.",
		"Aktivierungsereignisse für die VS Code-Extension.",
		"Array aus Badges, die im Marketplace in der Seitenleiste auf der Seite mit den Erweiterungen angezeigt werden.",
		"Die Bild-URL für den Badge.",
		"Der Link für den Badge.",
		"Eine Beschreibung für den Badge.",
		"Abhängigkeiten von anderen Erweiterungen. Der Bezeichner einer Erweiterung ist immer ${publisher}.${name}, beispielsweise \"vscode.csharp\".",
		"Ein Skript, das ausgeführt wird, bevor das Paket als VS Code-Extension veröffentlicht wird.",
		"Der Pfad zu einem 128x128-Pixel-Symbol.",
	],
	"vs/workbench/api/node/extHostDiagnostics": [
		"{0} weitere Fehler und Warnungen werden nicht angezeigt.",
	],
	"vs/workbench/node/extensionHostMain": [
		"Der Pfad \"{0}\" verweist nicht auf einen gültigen Test Runner für eine Extension.",
	]
});