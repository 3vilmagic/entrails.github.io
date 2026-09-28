const cardNameArr = ["The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor",
"The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit", "Wheel of Fortune", 
"Justice", "The Hanged Man", "Death", "Temperance", "The Devil", "The Tower", "The Star",
"The <a href="l00k">Moon</a>", "The Sun", "Judgement", "The World"];

const cardImgArr = ["cards/0_The Fool.png", "cards/1_The Magician.png", "cards/2_The High Priestess.png",
"cards/3_The Empress.png", "cards/4_The Emperor.png", "cards/5_The Heirophant.png", "cards/6_The Lovers.png",
"cards/7_The Chariot.png", "cards/8_Strength.png", "cards/9_The Hermit.png", "cards/10_Wheel of Fortune.png",
"cards/11_Justice.png", "cards/12_The Hanged Man.png", "cards/13_Death.png", "cards/14_Temperance.png",
"cards/15_The Devil.png", "cards/16_The Tower.png", "cards/17_The Star.png", "cards/18_The Moon.png",
"cards/19_The Sun.png", "cards/20_Judgement.png", "cards/21_The World.png"];

const cardDescArr = ["Despite its name, the Fool card is one of the most positive cards in the deck. It represents the start of something new... Literally everything is ahead of you, there is only potential and growth. This card is about heading into the unknown, eyes and heart open.",
"In a similar vein to The Fool, the Magician is about starting something new... What are you waiting for? There is no time like the present to get started on the thing you’ve been thinking about for a while.",
"In modern tarot readings, this card is associated with sacred, divine and unconscious wisdom... A call to trust your instincts while practicing empathy and compassion. Some also associate this card with patience and stillness. Taking the time and space you need.",
"The Empress has a strong connection with fertility, abundance, productivity, mother nature and a nurturing energy. This can translate to the growth of self, family or creativity. ",
"This card typically represents stability, a commanding energy, the breadwinner or provider. It’s a reminder to bring order to chaos when necessary. Use systems and methodology to get the results you're looking for. Now is the time to take control.",
"Similar to the Magician card, this represents the connection between Earth and heaven... In a reading, this card represents wisdom and learning. It can call upon the idea of mentorship or teachers as well. ",
"This card usually represents connection, honest communication, vulnerability, and calling on its origins, determining the values you want to move through life with.",
"This card typically calls to mind willpower and self control... It’s a card about action, not reflection. Move forward in control, be brave. ",
"Strength goes hand in hand with two other Major Arcana cards, Justice and Temperance. Together they are known as the cardinal virtues... Strength is about endurance and stamina. Knowing that you can handle whatever life throws your way.",
"The Hermit card represents taking time to withdraw and reflect internally. Look <a href="sh3ll">inside</a> yourself for the answers you seek. Sometimes The Hermit represents a cross-roads or new life direction. A reminder to check in with yourself before taking a leap.",
"If you reveal this card in a tarot reading, it typically is a reminder of the constant change that surrounds us. A reminder that things will be good, but they will also inevitably be bad. Celebrate the highs and accept the lows. ",
"Like Strength and Temperance, Justice is one of the cardinal virtues... This card is about owning up to your actions. It’s about taking accountability and expecting a fair response from the universe. Always consider the ramifications of your actions and decisions. ",
"Though ominous visually, this card reminds us that we must release the old in order to evolve to the new... The card depicts self-sacrifice, not punishment. It’s about being suspended in time... Pausing in order to see more clearly. ",
"Something that is no longer serving you is ending. Despite its depiction of the Grim Reaper, this card represents changes in one’s life and an increased understanding of what you want or need.",
"Very often this card’s imagery shows a figure pouring liquid from one container into another. Which symbolizes diluting wine with water. This card stands for moderation, frugality, and patience.",
"This card represents being caught up in bad behavior or habits. Giving in to our darker side. When you get this card in a reading, it’s time to try to take a step back and look at yourself more clearly. And take more control of your life. Time to reframe your thinking. ",
"This card typically means major change. Often destructive in nature. This change will result in personal growth or positive change, but you need to get through it to get to the other side. ",
"The Star has a gentle message. After going through the trials and tribulations... you are now able to focus on your inner being. It's calm after the storm. It’s about new hope.",
"The <a href="l00k">Moon</a> typically suggests illusion. Things are perhaps not as they appear. Some readers also interpret this card as a reminder to face the hard things that we’ve endured, in order to prevent those traumas from impacting our future. It plays on illusion and deception and calls to question the root of our fears.",
"Unlike The <a href="l00k">Moon</a> card, The Sun tarot card is overwhelmingly positive... Just as the sun provides us with energy and life, this card represents abundance and success. Though the pairing of The <a href="l00k">Moon</a> and The Sun reminds me that we must take the good with the bad.",
"This card calls to mind an awakening or re-birth. Applying your learning and life experience to unlock a higher level of spirituality or wisdom. Some readers often mention a sense of community here too. Use those around you to help support you as you take on the next journey.",
"The World represents a wholeness. It stands for achievement and completion... It’s a moment of triumph before the cycle restarts again... Now is the time to reflect on where you are in life, all you have achieved and what is next. "];

function drawCard() {
  // get UI variables
  const cardName = document.getElementById('cardName');
  const cardImg = document.getElementById('cardImg');
  const cardDesc = document.getElementById('cardDesc');
  const drawBtn = document.getElementById('drawBtn');
  
  // get random card number
  let cardIndex = Math.floor(Math.random() * 22);
  
  // change the display to match the card
  cardImg.src = cardImgArr[cardIndex];
  cardName.innerHTML = cardNameArr[cardIndex];
  cardDesc.innerHTML = cardDescArr[cardIndex];
  
  // show results
  cardName.style.display = 'block';
  cardDesc.style.display = 'block';
  drawBtn.style.display = 'none';
}
