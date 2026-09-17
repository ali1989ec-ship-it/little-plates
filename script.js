const meals = [
  {title:'Gentle shakshuka',region:'Middle East',time:'breakfast',goals:['grow','colour'],minutes:20,description:'Eggs in a mild tomato and pepper sauce.',ingredients:['Eggs','Passata','Red pepper','Small wholemeal pittas','Olive oil'],steps:['Soften finely diced pepper in a little oil, then add passata and simmer.','Crack in the eggs, cover and cook until the whites and yolks are fully set.','Serve with warm pitta for dipping.']},
  {title:'Colourful masala oats',region:'South Asia',time:'breakfast',goals:['energy','colour'],minutes:15,description:'Savoury oats with peas, carrots and gentle spice.',ingredients:['Porridge oats','Frozen peas','Carrot','Tomato','Ground turmeric'],steps:['Cook finely diced tomato and grated carrot with a pinch of turmeric.','Add oats, water and peas; simmer until the oats are soft and peas are hot.','Cool a little before serving.']},
  {title:'Rainbow hummus pitta',region:'Middle East',time:'lunch',goals:['energy','colour'],minutes:10,description:'Soft pitta pockets with hummus and colourful veg.',ingredients:['Wholemeal pitta','Tinned chickpeas','Tahini','Lemon','Cucumber','Grated carrot','Red pepper'],steps:['Mash rinsed chickpeas with a little tahini, lemon and water until smooth.','Warm the pitta and cut into pockets.','Spread with hummus and fill with finely cut vegetables.']},
  {title:'Chickpea chaat bowls',region:'South Asia',time:'lunch',goals:['grow','colour'],minutes:15,description:'A bright, lemony chickpea and potato bowl.',ingredients:['Tinned chickpeas','Cooked potato','Cucumber','Tomato','Lemon'],steps:['Drain and rinse chickpeas; dice the cooked potato and vegetables.','Toss together with a squeeze of lemon.','Mash some chickpeas for younger eaters and serve the pieces at a suitable size.']},
  {title:'Quinoa, corn & bean bowls',region:'South America',time:'lunch',goals:['grow','colour','energy'],minutes:20,description:'A colourful Peru-inspired bowl with simple toppings.',ingredients:['Quinoa','Tinned black beans','Sweetcorn','Avocado','Red pepper','Lime'],steps:['Cook quinoa according to the packet and let it cool slightly.','Rinse beans and warm them with sweetcorn and finely diced pepper.','Serve in small piles with avocado and a squeeze of lime.']},
  {title:'Cosy lentil mujaddara',region:'Middle East',time:'dinner',goals:['grow','energy'],minutes:30,description:'Soft lentils and rice with sweet, slow-cooked onion.',ingredients:['Rice','Tinned brown lentils','Onion','Olive oil','Cucumber'],steps:['Cook rice according to the packet.','Slowly cook thinly sliced onion in a little oil until soft and golden.','Warm rinsed lentils, mix with rice and top with onion; add cucumber on the side.']},
  {title:'Soft vegetable khichdi',region:'South Asia',time:'dinner',goals:['grow','energy','colour'],minutes:30,description:'Comforting rice and lentils with peas and carrots.',ingredients:['Rice','Red split lentils','Frozen peas','Carrot','Ground turmeric'],steps:['Rinse the rice and lentils, then simmer together in plenty of water.','Add finely diced carrot, peas and a pinch of turmeric.','Cook until everything is very soft, adding water as needed.']},
  {title:'Ginger tofu rice bowl',region:'East Asia',time:'dinner',goals:['grow','colour','energy'],minutes:25,description:'Crisp-edged tofu with rice and soft vegetables.',ingredients:['Plain firm tofu','Rice','Broccoli','Carrot','Fresh ginger','Sesame oil'],steps:['Cook rice according to the packet and steam vegetables until tender.','Pat tofu dry, cut small and pan-cook with a little sesame oil until hot throughout.','Add finely grated ginger and serve the tofu, rice and vegetables in separate piles.']},
  {title:'Vegetable jollof rice',region:'West Africa',time:'dinner',goals:['energy','colour'],minutes:30,description:'Tomato rice with peas and sweet peppers.',ingredients:['Rice','Passata','Red pepper','Frozen peas','Carrot','Onion'],steps:['Soften finely diced onion, carrot and pepper in a pan.','Add rice, passata and water according to the rice packet; cover and cook gently.','Stir in peas near the end and cook until the rice and peas are fully done.']},
  {title:'Baked plantain bites',region:'West Africa',time:'snack',goals:['energy','colour'],minutes:20,description:'Sweet, soft plantain rounds with mashed mango.',ingredients:['Ripe plantain','Mango','Lime','A little vegetable oil'],steps:['Peel and slice ripe plantain into rounds; brush lightly with oil.','Bake at 200°C until soft and golden, turning once.','Mash mango with a little lime and serve as a dip.']},
  {title:'Coconut rice pudding',region:'East Africa',time:'dessert',goals:['energy','colour'],minutes:25,description:'A creamy coconut pudding with mango.',ingredients:['Pudding rice','Tinned coconut milk','Water','Ripe mango'],steps:['Simmer pudding rice in coconut milk and water, stirring often until very soft.','Add more water if it gets too thick.','Cool until warm and top with finely cut mango.']},
  {title:'Mango sticky rice',region:'Southeast Asia',time:'dessert',goals:['energy','colour'],minutes:25,description:'Soft coconut rice and ripe mango slices.',ingredients:['Glutinous rice','Tinned coconut milk','Ripe mango'],steps:['Cook glutinous rice according to the packet.','Warm coconut milk and stir a little into the cooked rice.','Serve with ripe mango cut into suitable pieces.']},
  {title:'Pacific fruit cup',region:'Pacific Islands',time:'dessert',goals:['colour'],minutes:10,description:'A bright bowl of tropical fruit and coconut.',ingredients:['Pineapple','Mango','Kiwi','Banana','Unsweetened desiccated coconut'],steps:['Peel and cut the fruit into small, suitable pieces.','Mix in a bowl.','Add a small sprinkle of coconut if liked.']},
  {title:'Mango lassi',region:'South Asia',time:'drink',goals:['grow','colour'],minutes:5,description:'A creamy mango and yoghurt drink.',ingredients:['Ripe mango','Plain yoghurt without gelatine','Water'],steps:['Blend peeled mango with plain yoghurt.','Add water until easy to sip.','Pour into small cups and serve chilled.']},
  {title:'Mint lemon cooler',region:'Middle East',time:'drink',goals:['colour'],minutes:5,description:'A refreshing lemon and mint sip.',ingredients:['Lemon','Fresh mint','Cold water'],steps:['Squeeze a little lemon into cold water.','Bruise a few mint leaves, stir them in and let the flavour infuse.','Strain the leaves for younger children and serve in small cups.']},
  {title:'Watermelon agua fresca',region:'South America',time:'drink',goals:['colour'],minutes:5,description:'Watermelon and lime blended with water.',ingredients:['Seedless watermelon','Lime','Cold water'],steps:['Blend watermelon with a splash of water and a little lime juice.','Strain if a smoother drink is preferred.','Serve in small cups.']}
];
const state={time:'all',goal:'all'};
const cards=document.querySelector('#cards');
const count=document.querySelector('#result-count');
const empty=document.querySelector('#empty');
const dialog=document.querySelector('#recipe-dialog');
const content=document.querySelector('#dialog-content');
const labels={breakfast:'Breakfast',lunch:'Lunch',dinner:'Dinner',snack:'Snack',dessert:'Dessert',drink:'Drink'};
const imageFor=m=>`images/world-${String(meals.indexOf(m)+1).padStart(2,'0')}.jpg`;
function render(){
  const shown=meals.filter(m=>(state.time==='all'||m.time===state.time)&&(state.goal==='all'||m.goals.includes(state.goal)));
  count.textContent=`${shown.length} ${shown.length===1?'idea':'ideas'} to try`;
  empty.hidden=shown.length!==0;
  cards.innerHTML=shown.map((m)=>`<article class="meal-card"><img class="card-photo" src="${imageFor(m)}" alt="${m.title}" loading="lazy"><span class="card-meta">${m.region} · ${labels[m.time]} · ${m.minutes} min</span><h3>${m.title}</h3><p>${m.description}</p><button type="button" data-recipe="${meals.indexOf(m)}">See ingredients & steps</button></article>`).join('');
}
document.querySelectorAll('.chip').forEach(btn=>btn.addEventListener('click',()=>{
  state[btn.dataset.filter]=btn.dataset.value;
  document.querySelectorAll(`[data-filter="${btn.dataset.filter}"]`).forEach(b=>{const active=b===btn;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
  render();
}));
cards.addEventListener('click',event=>{
  const button=event.target.closest('[data-recipe]');if(!button)return;
  const m=meals[Number(button.dataset.recipe)];
  content.innerHTML=`<img class="dialog-photo" src="${imageFor(m)}" alt="${m.title}"><p class="dialog-meta">${m.region} · ${labels[m.time]} · ${m.minutes} minutes</p><h2 class="dialog-title" id="dialog-title">${m.title}</h2><p class="dialog-intro">${m.description}</p><div class="dialog-grid"><div><h3>Pick up at ${document.querySelector('#shop').value}</h3><ul>${m.ingredients.map(x=>`<li>${x}</li>`).join('')}</ul></div><div><h3>How to make it</h3><ol>${m.steps.map(x=>`<li>${x}</li>`).join('')}</ol></div></div>`;
  dialog.showModal();
});
document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
render();
