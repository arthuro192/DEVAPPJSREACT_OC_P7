
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

const iterations = 100000;

console.log("CODE_TEST DE PERFORMANCE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log("ITÉRATION_BOUCLE = " + iterations + " >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
console.log("INSTRUCTION_CONSOLE.TIME/TIMEEND >>>>>>>>>>>>>>>>");
// console.log("INSTRUCTION_PERFORMANCE.NOW() >>>>>>>>>>>>>>>>");

const body = document.querySelector("body");

console.time("TEST_SANS FONCTION");
// const t0 = performance.now();

    for (let i = 0; i < iterations; i++) {
        const paragraphe = document.createElement("p");
        paragraphe.setAttribute("attr_01", "value_01");
        paragraphe.textContent = i + " | [TEST_SANS_FONCTION] Tribute to Keith Flint.";
        body.appendChild(paragraphe);
    }

console.timeEnd("TEST_SANS FONCTION");
// const t1 = performance.now();
// console.log("TEST_SANS FONCTION : " + (t1 - t0) + " ms");
console.time("TEST_AVEC FONCTION");
// const t2 = performance.now();

    for (let i = 0; i < iterations; i++) {
        const paragraphe = add_node("p", "body", "attr_01", "value_01");
        paragraphe.textContent = i + " | [TEST_AVEC_FONCTION] Tribute to Keith Flint.";
    }

console.timeEnd("TEST_AVEC FONCTION");
// const t3 = performance.now();
// console.log("TEST_AVEC FONCTION : " + (t3 - t2) + " ms");

// %SPECIFIC_TEST% ################################################################

