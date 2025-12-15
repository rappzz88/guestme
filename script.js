
/
 Pengendali Auth State auth.onAuthStateChanged(async (user) => {   if (user) {     const userDoc = await db.collection("users").doc(user.uid).get();     currentUser = { uid: user.uid, ...userDoc.data() };     loginPage.style.display = "none";     mainPage.style.display = "block";     updateUserUI();     loadPuzzles();     loadMyPuzzles();   } else {     loginPage.style.display = "block";     mainPage.style.display = "none";   } });
in
main

Edit

Preview
Indent mode

Spaces
Indent size

2
Line wrap mode

No wrap
Editing Pengendali Auth State auth.onAuthStateChanged(async (user) => { if (user) { const userDoc = await db.collection("users").doc(user.uid).get(); currentUser = { uid: user.uid, ...userDoc.data() }; loginPage.style.display = "none"; mainPage.style.display = "block"; updateUserUI(); loadPuzzles(); loadMyPuzzles(); } else { loginPage.style.display = "block"; mainPage.style.display = "none"; } }); file contents
1

Use Control + Shift + m to toggle the tab key moving focus. Alternatively, use esc then tab to move to the next interactive element on the page.
