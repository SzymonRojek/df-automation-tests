# 💻 Direct Ferries E2E Tests (TestCafe)

Automated E2E tests suite developed with Gherkin, Cucumber and TestCafe.

## ✅ Completed Tasks

1. **Extended the test coverage for sites:**   
   - 🇬🇧 `www.directferries.de`  
   - 🇮🇹 `www.directferries.it`  

2. **Validated Booking and Sign In sites:**  
   Ive validated two sites:  
   Booking https://account.directferries.com/?culture=en-GB
   and 
   Login (SignIn) https://account.directferries.com/signin?tab=sign-in


3. **Fixed failing route-check feature for Scenarios 1 & 3**  
   
   I have rewritten the selectRoute method:

   ```
     selectRoute: async function (leg, route) {
        await t
            .typeText(await getRoute(leg), " ") //type a space first as we sometimes have issues where the first type text doesn't register
            .typeText(await getRoute(leg), route)
            .click(await getRoute(leg))

        const formattedRoute = route.replace(' - ', '-'); // "Amalfi - Neapel" -> "Amalfi-Neapel"
        const matchingButton = Selector(`[data-testid="result-section-0"] button[data-testid="${formattedRoute}"]`);
        await t.click(matchingButton)
              .scroll('top')//only needed for tablet sized screens to scroll to top after click.
    },
   ```

🔧 Added dynamic mapping from route → data-testid
→ route.replace(' - ', '-') allows converting "Amalfi - Neapel" to match the button's data-testid="Amalfi-Neapel"

🔍 Instead of clicking the first button, the method now selects the specific matching button:
```
Selector(`[data-testid="result-section-0"] button[data-testid="${formattedRoute}"]`)
```
→ This ensures that exactly the button corresponding to the searched route is selected.

🧠 Works dynamically, because it's based on the route value, not a hardcoded button or index.

# 💡 If I Had More Time...
Given more time, I would:

### 🔍 Explore the website more deeply using DevTools
- Improve understanding of the structure, async behavior on the pages, especially better understand the route logic.

- Optionally, create a class to keep all selectors organized in one place.