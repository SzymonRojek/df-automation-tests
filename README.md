# 💻 Direct Ferries E2E Tests (TestCafe)

Automated end-to-end (E2E) test suite developed with [TestCafe](https://testcafe.io/), focused on validating critical user journeys on the [directferries.co.uk](https://www.directferries.co.uk/) website and its international equivalents.

---

## ✅ Completed Tasks

1. **Multi-Locale Test Coverage**  
   Extended support for different site versions:  
   - 🇬🇧 `www.directferries.co.uk`  
   - 🇮🇹 `www.directferries.it`  

2. **User Login Validation**  
   Created test cases for invalid login attempts on the account portal:  
   `https://account.directferries.com/?culture=en-GB`  
   (2 tests are expected to fail to validate proper error handling).

3. **Route-Check Feature**  
   Developed a utility method that verifies whether the correct outbound and return routes are displayed after a search is performed.

   Initial failures in tests for routes were caused by:
   - A modal popup (e.g. ky-notice) blocking UI interactions.
   - Timing issues where quote elements were not fully visible or loaded.
   
   These issues were partially mitigated. The tests now:
   - Wait for the quote section to fully load.
   - Close blocking popups (if present).
   - Use improved text-matching logic to confirm displayed routes.

---

## 🧪 How to Run the Tests

To run tests locally in Chrome or another browser:

```bash
testcafe chrome src/tests/(filename).js
```

# 💡 If I Had More Time...
Given more time, I would:

### 🔍 Explore the website more deeply using DevTools
Better understand the structure, async behavior, and route logic behind DealFinder.

### 🧩 Integrate with Cucumber
Improve readability and maintainability by expressing test cases in Gherkin syntax, bridging the gap between technical and non-technical stakeholders.

### 📦 Refactor helper functions
Improve modularity by organizing reusable actions (e.g., route selection, quote checking, etc.) into dedicated modules.

### 🧪 Write more test scenarios
Including: navigation elements, booking simulations, mobile/responsive behavior, and regression coverage across languages.


# 🙏 Final Thoughts
Thank you for the opportunity to work on these tasks.
Especially the third task (route-checking) was both challenging and rewarding. It highlighted the complexity behind ferry route mapping and dynamic quote generation, and made me eager to dive deeper into these patterns.