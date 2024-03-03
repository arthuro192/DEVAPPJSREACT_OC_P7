
// GENERAL ############################################################################################################################################################
// COMMON #########################################################################
// FUNCTIONS ######################################################################
// QUERYS_SELECTOR ################################################################
// CREATE_ELEMENTS ################################################################
// SET_ATTRIBUTES #################################################################
// SET_VALUES #####################################################################
// %SPECIFIC_SECTION% #############################################################
// APPEND_CHILDS ##################################################################
// %PAGE%.HTML ########################################################################################################################################################
// %OTHER% ##############################
// %CURRENT_TESTS% ####################################################################################################################################################
// %SPECIFIC_TEST% ################################################################
// TESTS_OK #############################
// TESTS_KO #############################
// CONCLUSION ###########################





// GENERAL ############################################################################################################################################################

// QUERYS_SELECTOR ################################################################

const body = document.querySelector("body");

// CREATE_ELEMENTS ################################################################

const header = document.createElement("header");
const head_link = document.createElement("a");
const link_p = document.createElement("p");
const link_ico = document.createElement("img");
const h1 = document.createElement("h1");
const nav = document.createElement("nav");
const search_form = document.createElement("form");
const search_input = document.createElement("input");
const search_btn = document.createElement("button");
const main = document.createElement("main");
const filters_area = document.createElement("section");
const filters_form = document.createElement("form");
const div_food = document.createElement("div");
const select_food = document.createElement("select");
const option_food = document.createElement("option");
const div_appliance = document.createElement("div");
const select_appliance = document.createElement("select");
const option_appliance = document.createElement("option");
const div_ustensil = document.createElement("div");
const select_ustensil = document.createElement("select");
const opt_ustensil = document.createElement("option");
const recipes_nb = document.createElement("p");
const recipes_area = document.createElement("section");
const article = document.createElement("article");

// SET_ATTRIBUTES #################################################################

head_link.classList.add("head_link");
link_p.classList.add("link_p");
link_ico.classList.add("link_ico");
link_ico.src = "./img/ring.png";
link_ico.alt = "Icône d'un anneau rempli";
search_form.setAttribute("method", "get");
search_form.setAttribute("action", "");

let search_input_attrs = [
    {attr : "type", value: "search"},
    {attr : "name", value: "search"},
    {attr : "class", value: "search"},
    {attr : "maxlength", value: "100"},
    {attr : "placeholder", value: "Rechercher une recette, un ingrédient, ..."},
];
search_input_attrs.forEach(obj => {
    search_input.setAttribute(obj.attr, obj.value);
});

filters_form.classList.add("filters_form");
filters_form.setAttribute("method", "get");
filters_form.setAttribute("action", "");
    div_food.classList.add("filters_ico");
    select_food.setAttribute("name", "food");
    select_food.setAttribute("id", "food");
        option_food.setAttribute("value", "ingredients");
    div_appliance.classList.add("filters_ico");
    select_appliance.setAttribute("name", "devices");
    select_appliance.setAttribute("id", "devices");
        option_appliance.setAttribute("value", "appareils");
    div_ustensil.classList.add("filters_ico");
    select_ustensil.setAttribute("name", "utensils");
    select_ustensil.setAttribute("id", "utensils");
        opt_ustensil.setAttribute("value", "ustensiles");
    recipes_nb.classList.add("recipes_nb");
    recipes_area.classList.add("recipes_area");

// SET_VALUES #####################################################################

link_p.textContent = "LES PETITS PLATS";
h1.innerHTML = "CHERCHEZ PARMI PLUS DE 1500 RECETTES <br> DU QUOTIDIEN, SIMPLES ET DÉLICIEUSES";
option_food.textContent = "Ingrédients";
option_appliance.textContent = "Appareils";
opt_ustensil.textContent = "Ustensiles";
recipes_nb.textContent = "1500 recettes";

// SPÉ_ARTICLE ####################################################################

article.innerHTML = `
<div class="article_img">
    <p class="recipe_time">80min</p>
    <img class="recipe_img" src="./photos_recettes/recette_03.jpg" alt="Photo d'une recette de cuisine."/>
</div>
<div class="article_content">
    <h2>Poulet coco réunionnais</h2>
    <div class="recipe_step">
        <h3>RECETTE</h3>
        <p class="step_p">Découper le poulet en morceaux, les faire dorer dans une cocotte avec de l'huile d'olive. Salez et poivrez. Une fois doré, laisser cuire en ajoutant de l'eau. Au bout de 30 minutes, ajouter le coulis de tomate, le lait de coco ainsi que le poivron et l'oignon découpés en morceaux. Laisser cuisiner 30 minutes de plus. Servir avec du riz</p>
    </div>
    <div class="recipe_food">
        <h3>INGRÉDIENTS</h3>
        <ul class="food_list">
            <li class="food">Poulet
                <ul><li class="food_qty">1</li></ul>
            </li>
            <li class="food">Coulis de tomate
                <ul><li class="food_qty">25cl</li></ul>
            </li>
            <li class="food">Poivron rouge
                <ul><li class="food_qty">1</li></ul>
            </li>
            <li class="food">Lait de coco
                <ul><li class="food_qty">400ml</li></ul>
            </li>
            <li class="food">Oignon
                <ul><li class="food_qty">1</li></ul>
            </li>
            <li class="food">Huile d'olive
                <ul><li class="food_qty">1 cuillère à soupe</li></ul>
            </li>
        </ul>
    </div>
</div>
`;

// Duplication de l'article X4, uniquement pour avoir un minimum d'une ligne et d'une colonne sur la grille CSS ".recipes_area".
// Ceci afin d'avoir un visuel conforme pour faire le responsive (avant de récupérer toutes les données JSON).

const article_02 = article.cloneNode(true);
const article_03 = article.cloneNode(true);
const article_04 = article.cloneNode(true);

// APPEND_CHILDS ##################################################################

body.append(header, main);
header.append(head_link, h1, nav);
head_link.append(link_p, link_ico);
nav.append(search_form);
search_form.append(search_input, search_btn);
main.append(filters_area, recipes_area);
filters_area.append(filters_form);
filters_form.append(div_food, div_appliance, div_ustensil, recipes_nb);
div_food.append(select_food);
div_appliance.append(select_appliance);
div_ustensil.append(select_ustensil);
select_food.append(option_food);
select_appliance.append(option_appliance);
select_ustensil.append(opt_ustensil);
recipes_area.append(article, article_02, article_03, article_04);

// %CURRENT_TESTS% ####################################################################################################################################################

