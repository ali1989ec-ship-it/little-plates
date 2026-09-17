const meals = [
  {title:'Banana oat porridge',time:'breakfast',goals:['energy','grow'],icon:'🥣',minutes:10,description:'Warm oats with banana and a spoonful of yoghurt.',ingredients:['Porridge oats','Milk or fortified alternative','Banana','Plain yoghurt'],steps:['Simmer oats with milk until soft.','Mash in half a banana.','Top with yoghurt and the remaining banana.']},
  {title:'Eggy toast fingers',time:'breakfast',goals:['grow','energy'],icon:'🍳',minutes:10,description:'Soft scrambled egg on wholemeal toast.',ingredients:['Eggs','Wholemeal bread','Milk','Cucumber'],steps:['Whisk the eggs with a splash of milk.','Cook gently in a pan until fully set.','Serve on toast with cucumber cut appropriately for your child.']},
  {title:'Berry yoghurt bowl',time:'breakfast',goals:['colour','grow'],icon:'🫐',minutes:5,description:'A colourful bowl with fruit and crunchy oats.',ingredients:['Plain yoghurt','Berries','Banana','Porridge oats'],steps:['Spoon yoghurt into a bowl.','Add chopped fruit and a sprinkle of oats.','Soften the oats first if your child prefers a gentler texture.']},
  {title:'Cheesy bean quesadilla',time:'lunch',goals:['grow','energy'],icon:'🫓',minutes:15,description:'A quick, melty wrap with beans tucked inside.',ingredients:['Tortilla wraps','Tinned kidney beans','Cheddar cheese','Sweetcorn'],steps:['Drain and rinse the beans, then mash lightly.','Spread beans, sweetcorn and cheese on half a wrap; fold over.','Cook in a dry pan until hot throughout and the cheese melts. Cut into wedges.']},
  {title:'Rainbow hummus pitta',time:'lunch',goals:['colour','energy'],icon:'🥙',minutes:10,description:'Soft pitta pockets with hummus and colourful veg.',ingredients:['Wholemeal pitta','Hummus','Cucumber','Grated carrot','Red pepper'],steps:['Warm the pitta and cut into pockets.','Spread with hummus.','Fill with finely cut vegetables.']},
  {title:'Tuna and sweetcorn jacket',time:'lunch',goals:['grow','colour'],icon:'🥔',minutes:15,description:'A fluffy potato topped with a simple tuna mix.',ingredients:['Microwave baking potatoes','Tinned tuna','Sweetcorn','Plain yoghurt'],steps:['Cook the potato until soft all the way through.','Drain tuna and sweetcorn, then mix with yoghurt.','Split the potato and spoon the topping over.']},
  {title:'Tomato lentil pasta',time:'dinner',goals:['grow','energy','colour'],icon:'🍝',minutes:20,description:'A cosy pasta with lentils hidden in a tomato sauce.',ingredients:['Pasta','Tinned lentils','Passata','Grated carrot','Cheddar cheese'],steps:['Cook pasta according to the packet.','Simmer rinsed lentils, passata and grated carrot until the carrot softens.','Stir through pasta and add a little cheese.']},
  {title:'Chicken rice bowls',time:'dinner',goals:['grow','energy','colour'],icon:'🍚',minutes:25,description:'Mix and match rice, chicken and familiar vegetables.',ingredients:['Chicken breast','Rice','Frozen peas','Carrots'],steps:['Cook rice according to the packet.','Cook chicken thoroughly and cut into small pieces.','Steam peas and carrots until soft, then serve everything in separate little piles.']},
  {title:'Veggie omelette wedges',time:'dinner',goals:['grow','colour'],icon:'🍳',minutes:15,description:'A soft omelette with peas and grated cheese.',ingredients:['Eggs','Frozen peas','Cheddar cheese','Cherry tomatoes'],steps:['Cook peas until soft and whisk eggs.','Pour eggs into a pan, add peas and cheese, and cook until fully set.','Cut into wedges; quarter tomatoes before serving.']},
  {title:'Apple and cheese slices',time:'snack',goals:['energy','grow'],icon:'🍎',minutes:5,description:'A sweet and savoury little plate.',ingredients:['Apple','Cheddar cheese','Wholegrain crackers'],steps:['Slice the apple into child-friendly pieces.','Cut cheese into small pieces.','Serve with crackers.']},
  {title:'Banana yoghurt dip',time:'snack',goals:['grow','colour'],icon:'🍌',minutes:5,description:'Fruit pieces with a creamy dip.',ingredients:['Banana','Strawberries','Plain yoghurt'],steps:['Cut fruit into suitable pieces.','Spoon yoghurt into a small bowl.','Let your child dip the fruit.']},
  {title:'Mini hummus dippers',time:'snack',goals:['energy','colour'],icon:'🥕',minutes:5,description:'A dip plate with soft pitta and colourful veg.',ingredients:['Hummus','Wholemeal pitta','Cucumber','Carrot'],steps:['Slice pitta into fingers.','Prepare vegetables in an age-appropriate size and texture.','Serve with a small pot of hummus.']}
];
const state={time:'all',goal:'all'};
const cards=document.querySelector('#cards');
const count=document.querySelector('#result-count');
const empty=document.querySelector('#empty');
const dialog=document.querySelector('#recipe-dialog');
const content=document.querySelector('#dialog-content');
const cap=s=>s.charAt(0).toUpperCase()+s.slice(1);
function render(){
  const shown=meals.filter(m=>(state.time==='all'||m.time===state.time)&&(state.goal==='all'||m.goals.includes(state.goal)));
  count.textContent=`${shown.length} ${shown.length===1?'idea':'ideas'} to try`;
  empty.hidden=shown.length!==0;
  cards.innerHTML=shown.map((m)=>`<article class="meal-card"><span class="card-icon" aria-hidden="true">${m.icon}</span><span class="card-meta">${cap(m.time)} · ${m.minutes} min</span><h3>${m.title}</h3><p>${m.description}</p><button type="button" data-recipe="${meals.indexOf(m)}">See ingredients & steps</button></article>`).join('');
}
document.querySelectorAll('.chip').forEach(btn=>btn.addEventListener('click',()=>{
  state[btn.dataset.filter]=btn.dataset.value;
  document.querySelectorAll(`[data-filter="${btn.dataset.filter}"]`).forEach(b=>{const active=b===btn;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
  render();
}));
cards.addEventListener('click',event=>{
  const button=event.target.closest('[data-recipe]');if(!button)return;
  const m=meals[Number(button.dataset.recipe)];
  content.innerHTML=`<p class="dialog-meta">${cap(m.time)} · ${m.minutes} minutes</p><h2 class="dialog-title" id="dialog-title">${m.title}</h2><p class="dialog-intro">${m.description}</p><div class="dialog-grid"><div><h3>Pick up at ${document.querySelector('#shop').value}</h3><ul>${m.ingredients.map(x=>`<li>${x}</li>`).join('')}</ul></div><div><h3>How to make it</h3><ol>${m.steps.map(x=>`<li>${x}</li>`).join('')}</ol></div></div>`;
  dialog.showModal();
});
document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
render();
