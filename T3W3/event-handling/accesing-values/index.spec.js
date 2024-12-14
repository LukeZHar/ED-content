const indexFile = require("./indexFile.js")
const eventFire = require('./eventFire.js')
const {
    challengeOne,
    challengeTwo,
    challengeThree
} = require("./script.js")

function checkTextContent(element, string) {
  expect([element.innerText, element.textContent, element.innerHTML]).toEqual(
    expect.arrayContaining([expect.stringContaining(string)])
  );
}

document.body.innerHTML = indexFile()

describe("challenge one - ", () => {
    challengeOne()
    const paragraph = document.getElementById("output")
    const form = document.querySelector("form")
    let [nameDiv,  languageDiv, cohortDiv] = form.children
    let name = nameDiv.children[1]
    let language = languageDiv.children[1]
    let cohort = cohortDiv.children[1]
    describe("paragraph tag should - ", () => {
        test("start empty", () => {
            expect(paragraph.innerText).toEqual(undefined)
        })
        test("have text after form submit", () => {
            name.value = "John"
            language.value = "Ruby"
            cohort.value = "Melbourne"
            eventFire(form, 'submit')

            const expectedText = "Hello John, hope you are enjoying learning about Ruby in Melbourne";
            checkTextContent(paragraph, expectedText);
        })
    })
})

describe("challenge two - ", () => {
    challengeTwo()
    let button = document.getElementById("change-theme")
    let column = document.getElementById('challenge-two')
    describe("button text and column background should - ", () => {
        test("begin with 'Dark Mode' text and white background", () => {
            checkTextContent(button, "Dark Mode");
            expect(column.classList.contains("darkmode")).toEqual(false)
        })
        test("switch to text 'Light Mode' and color black after clicking button", () => {
            eventFire(button, 'click')
            expect(button.innerText).toEqual("Light Mode")
            expect(column.classList.contains("darkmode")).toEqual(true)
        })
        test("switch to text 'Dark Mode' and white background after clicking button again", () => {
            eventFire(button, 'click')
            checkTextContent(button, "Dark Mode");
            expect(column.classList.contains("darkmode")).toEqual(false)
        })
    })
})