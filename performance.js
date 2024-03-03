
// PERFORMANCE_TEST ###################################################################################################################################################

// Voir aussi :
// > https://jsben.ch/
// > https://jsbench.me/

// NODES_DOM_GENERATION_WITH_FUNCTION #############################################
// ABORT.

// FUNCTION #############################

function add_node(element, parent, attribute, value) {

    let elt = document.createElement(element);
    let container;

    switch (typeof parent) {
        case "string" :
            container = document.querySelector(parent);
            break;
        case "object" :
            container = parent;
    }

    switch (typeof attribute) {
        case "string" :
            elt.setAttribute(attribute, value);
            break;
        case "object" :
            attribute.forEach(obj => {
                elt.setAttribute(obj.attr, obj.value);
            });
    }

    container.appendChild(elt);
    return elt;

}

// PROCESS ##############################

let iterations = 100000;
const body = document.querySelector("body");

console.time("TEST_SANS_FONCTION");

    for (let i = 0; i < iterations; i++) {

        let paragraphe = document.createElement("p");
        paragraphe.setAttribute("attr_01", "value_01");
        paragraphe.textContent = "Contenu de mon paragraphe pour le TEST_SANS_FONCTION";
        body.appendChild(paragraphe);

    }

console.timeEnd("TEST_SANS_FONCTION");

console.time("TEST_AVEC_FONCTION");

    for (let i = 0; i < iterations; i++) {

        let paragraphe = add_node("p", "body", "attr_01", "value_01");
        paragraphe.textContent = "Contenu de mon paragraphe pour le TEST_AVEC_FONCTION";

    }

console.timeEnd("TEST_AVEC_FONCTION");

// %SPECIFIC_TEST% ################################################################

