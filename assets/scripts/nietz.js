const quotes = [
  {
    en: "“He who has a why to live can bear almost any how.” (Twilight of the Idols, or, How to Philosophize with a Hammer, 1889)",
    de: "„Hat man sein Warum des Lebens, so verträgt man sich fast mit jedem Wie.” (Götzen-Dämmerung, oder, Wie man mit dem Hammer philosophiert, 1889)"
  },
  {
    en: "“That which does not kill us makes us stronger.” (Twilight of the Idols, or, How to Philosophize with a Hammer, 1889)",
    de: "„Was mich nicht umbringt, macht mich stärker.” (Götzen-Dämmerung, oder, Wie man mit dem Hammer philosophiert, 1889)"
  },
  {
    en: "“Without music, life would be a mistake.” (Twilight of the Idols, or, How to Philosophize with a Hammer, 1889)",
    de: "„Ohne Musik wäre das Leben ein Irrtum.” (Götzen-Dämmerung, oder, Wie man mit dem Hammer philosophiert, 1889)"
  },
  {
    en: "“God is dead. God remains dead. And we have killed him.” (The Gay Science, 1882)",
    de: "„Gott ist tot. Gott bleibt tot. Und wir haben ihn getötet.” (Die fröhliche Wissenschaft, 1882)"
  },
  {
    en: "“Whoever fights monsters should see to it that in the process he does not become a monster...” (Beyond Good and Evil, 1886)",
    de: "„Wer mit Ungeheuern kämpft, mag zusehen, dass er nicht dabei zum Ungeheuer wird...” (Jenseits von Gut und Böse, 1886)"
  },
  {
    en: "“...And if you gaze long into an abyss, the abyss also gazes into you.” (Beyond Good and Evil, 1886)",
    de: "„...Und wenn du lange in einen Abgrund blickst, blickt der Abgrund auch in dich hinein. (Jenseits von Gut und Böse, 1886)”"
  },
  {
    en: "“Hope in reality is the worst of all evils because it prolongs the torments of man.” (Human, All Too Human: A Book for Free Spirits, 1879)",
    de: "„Die Hoffnung ist in Wahrheit das schlimmste aller Übel, weil sie die Qual der Menschen verlängert.” (Menschliches, Allzumenschliches: Ein Buch für freie Geister, 1879)"
  },
  {
    en: "“One must still have chaos in oneself to be able to give birth to a dancing star.” (Thus Spoke Zarathustra: A Book for All and None, 1885)",
    de: "„Man muss noch Chaos in sich haben, um einen tanzenden Stern gebären zu können.” (Also sprach Zarathustra: Ein Buch für Alle und Keinen, 1885)"
  },
  {
    en:"“Live dangerously!” (The Gay Science, 1882)",
    de: "„Lebe gefährlich!” (Die fröhliche Wissenschaft, 1882)"
  },
  {
    en:"“Become who you are.” (Ecce Homo: How One Becomes What One Is, 1908)",
    de:"„Werde, der du bist.” (Ecce homo: Wie man wird, was man ist, 1908)"
  },
  {
    en:"“A man's maturity: that is to have rediscovered the seriousness he possessed as a child at play.” (Beyond Good and Evil, 1886)",
    de:"„Reife des Mannes: das heißt den Ernst wiedergefunden haben, den man als Kind hatte beim Spiel.” (Jenseits von Gut und Böse, 1886)"
  },
  {
    en:"“There is always some madness in love. But there is also always some reason in madness.” (Thus Spoke Zarathustra: A Book for All and None, 1885)",
    de:"„Es steckt immer ein wenig Wahnsinn in der Liebe. Aber es steckt auch immer ein wenig Vernunft im Wahnsinn.” (Also sprach Zarathustra: Ein Buch für Alle und Keinen, 1885)"
  }

];

function generateQuote() {
  const quoteEl = document.getElementById("quote");
  const subEl = document.getElementById("quote-sub");

  quoteEl.classList.add("fade-out");
  subEl.classList.add("fade-out");

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    quoteEl.textContent = randomQuote.en;
    subEl.textContent = randomQuote.de;

    quoteEl.classList.remove("fade-out");
    subEl.classList.remove("fade-out");
    quoteEl.classList.add("fade-in");
    subEl.classList.add("fade-in");

    setTimeout(() => {
      quoteEl.classList.remove("fade-in");
      subEl.classList.remove("fade-in");
    }, 500);
  }, 500);
}
