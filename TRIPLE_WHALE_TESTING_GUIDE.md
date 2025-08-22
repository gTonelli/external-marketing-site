# JIRA Ticket: Triple Whale Event Tracking Validation

## 📋 **Ticket Summary**
**Title**: Validate Triple Whale Event Tracking Across All User Interactions  
**Type**: Testing Task  
**Priority**: High  
**Component**: Analytics/Tracking  

---

## 🎯 **Testing Objective**

### **Purpose**
Validate that all Triple Whale tracking events are firing correctly across the website to ensure proper analytics data collection and attribution tracking.

### **Scope**
Test all user interactions that should trigger Triple Whale events including:
- Page visits and navigation
- Form submissions (registration, newsletter, contact forms)
- Quiz interactions and completions
- Video interactions
- Button clicks and user engagement
- Scroll behavior tracking

---

## ✅ **Acceptance Criteria**

### **Event Tracking Requirements**
1. **All Triple Whale events fire successfully** across different user interactions
2. **Events contain accurate user data** (email, names, page information)
3. **No tracking-related errors** appear in browser console
4. **Events are sent to Triple Whale servers** (visible in network requests)

### **User Experience Requirements**
1. **Website functionality remains intact** during tracking
2. **No performance degradation** due to tracking events
3. **Forms and interactions work normally** regardless of tracking status
4. **Graceful handling** when tracking is blocked by ad blockers

### **Data Quality Requirements**
1. **Event timing is accurate** (events fire at correct moments)
2. **User information is captured correctly** in forms
3. **Page context is properly tracked** (page names, URLs)
4. **Custom event properties include relevant data**

---

## 🧪 **Testing Instructions**

### **Prerequisites**
1. Access to staging/development environment
2. Browser developer tools knowledge
3. Test email addresses for form submissions
4. Understanding of network request monitoring

### **Test Environment Setup**
1. Clear browser cache and cookies
2. Open browser developer tools (F12)
3. Navigate to **Console** and **Network** tabs
4. Disable ad blockers temporarily for accurate testing
5. Use incognito/private browsing mode for clean testing

---

## 📝 **Triple Whale Event Testing Process**

### **How to Monitor Triple Whale Events**

**Step 1: Open Developer Tools**
- Press F12 or right-click → Inspect
- Navigate to the **Console** tab
- Navigate to the **Network** tab

**Step 2: Monitor Console Messages**
- Look for messages starting with "Triple Whale event sent successfully"
- Watch for any error messages related to tracking

**Step 3: Monitor Network Requests**
- Filter network requests by "config-security" or "triplewhale"
- Look for POST requests to `https://api.config-security.com/event`
- Verify requests return successful status codes (200)

**Step 4: Verify Event Data**
- Check that events include proper user information
- Ensure event timing matches user actions
- Validate that no sensitive data is being tracked

---

## 📝 **Event Testing Scenarios**

### **Test Case 1: Triple Whale Initialization**
**Objective**: Verify Triple Whale tracking system loads properly

**Steps**:
1. Navigate to the homepage
2. Open browser console
3. Wait for page to fully load (3-5 seconds)
4. Look for Triple Whale initialization messages

**What to Look For**:
- No JavaScript errors in console
- Network requests to Triple Whale servers
- Page load event firing automatically

**Success Criteria**: ✅ Page loads without tracking errors, basic tracking infrastructure works

---

### **Test Case 2: Form Submission Events (Contact Tracking)**
**Objective**: Verify Triple Whale captures user contact information when forms are submitted

**Forms to Test**:
1. **Quiz Registration Forms** (after completing attachment style quiz)
2. **Newsletter Signup Forms** 
3. **Podcast Suggestion Forms**
4. **IAT Registration Forms**
5. **Spinning Wheel Email Collection**
6. **General Contact Forms**

**Testing Process**:
1. Navigate to a page with a form
2. Open developer tools (Console + Network tabs)
3. Fill out the form with test data:
   ```
   Email: testuser@example.com
   First Name: TestUser
   Last Name: QA
   ```
4. Submit the form
5. **Monitor Console**: Look for "Triple Whale event sent successfully: Contact"
6. **Monitor Network**: Check for POST request to `config-security.com`
7. **Verify Timing**: Event should fire immediately after form submission

**What to Validate**:
- ✅ Contact event fires when form is submitted
- ✅ Event includes email address and name data
- ✅ Network request is sent to Triple Whale servers
- ✅ No console errors appear
- ✅ Form submission completes successfully

**Success Criteria**: Contact information is captured and sent to Triple Whale without errors

---

### **Test Case 3: Page Navigation Events**
**Objective**: Verify Triple Whale tracks page visits and navigation

**Pages to Test**:
- Homepage
- Quiz pages (/quiz, /members-quiz)
- Course pages (/explore-courses, /wellness)
- IAT pages (/iat)
- Results pages

**Testing Process**:
1. Start on homepage with developer tools open
2. Navigate to different pages using menu/links
3. **Monitor Console**: Look for "Triple Whale event sent successfully: pageLoad"
4. **Check Timing**: Events should fire when page fully loads
5. **Verify Data**: Page name should match current page

**What to Validate**:
- ✅ Page load event fires on each navigation
- ✅ Event includes correct page name/URL
- ✅ Events fire consistently across different pages
- ✅ No duplicate events on single page load

**Success Criteria**: Page visits are tracked accurately across site navigation

---

### **Test Case 4: Quiz Interaction Events**
**Objective**: Verify Triple Whale tracks quiz-related user interactions

**Quiz Types to Test**:
1. **Attachment Style Quiz** (main quiz)
2. **Members Quiz** 
3. **Corporate Quiz**
4. **Any other available quizzes**

**Testing Process**:
1. Start a quiz with developer tools open
2. **Monitor Console** throughout quiz flow:
   - Quiz started event
   - Quiz progress events (as you answer questions)
   - Quiz finished event (on completion)
3. **Check Event Data**: Should include quiz name, progress, question numbers
4. **Verify Timing**: Events fire at appropriate moments

**What to Validate**:
- ✅ "quizStarted" event fires when quiz begins
- ✅ "quizProgress" events fire during quiz
- ✅ "quizFinished" event fires on completion
- ✅ Events include quiz name and relevant data
- ✅ Progress tracking is accurate

**Success Criteria**: Complete quiz journey is tracked from start to finish

---

### **Test Case 5: Button Click and Interaction Events**
**Objective**: Verify Triple Whale tracks important button clicks and user interactions

**Interactions to Test**:
1. **CTA Buttons** (Start Quiz, Get Results, etc.)
2. **Video Play Buttons** (if videos are present)
3. **Social Media Share Buttons**
4. **Download/Link Buttons**
5. **Navigation Menu Items**

**Testing Process**:
1. Navigate to pages with interactive elements
2. **Monitor Console** before clicking
3. Click buttons/links and watch for events:
   - "buttonClicked" events
   - "videoStarted" events
   - Other custom interaction events
4. **Verify Event Data**: Should include button labels, page context

**What to Validate**:
- ✅ Button click events fire when buttons are clicked
- ✅ Events include button labels and page information
- ✅ Video events fire when videos are played
- ✅ Events don't fire multiple times for single click
- ✅ Event timing matches user actions

**Success Criteria**: User interactions are tracked accurately with proper context

---

### **Test Case 6: Scroll Behavior Tracking**
**Objective**: Verify Triple Whale tracks user scroll behavior on pages

**Pages to Test**:
- Long-form content pages
- Quiz result pages
- Course information pages

**Testing Process**:
1. Navigate to a long page with developer tools open
2. **Slowly scroll down** the page
3. **Monitor Console** for "pageScrolled" events
4. **Check Event Data**: Should include scroll depth percentages

**What to Validate**:
- ✅ Scroll events fire at different scroll depths
- ✅ Events include accurate scroll percentage data
- ✅ Events include page context information
- ✅ Events don't fire excessively (reasonable throttling)

**Success Criteria**: User scroll behavior is tracked with appropriate depth measurements

---

### **Test Case 7: Error Handling and Resilience**
**Objective**: Verify website continues to function when Triple Whale tracking is blocked

**Testing Process**:
1. **Block Triple Whale domains** using browser extension or network settings
   - Block: `config-security.com`
   - Block: `api.config-security.com`
2. Navigate to the website
3. **Test all interactions**:
   - Fill out and submit forms
   - Navigate between pages
   - Start and complete quizzes
4. **Monitor Console** for error handling
5. **Verify Functionality**: All features should work normally

**What to Validate**:
- ✅ Website functions normally when tracking is blocked
- ✅ Forms submit successfully without tracking
- ✅ No uncaught JavaScript errors break the site
- ✅ User experience is not degraded
- ✅ Graceful error messages (if any) appear in console

**Success Criteria**: Website remains fully functional even when Triple Whale is unavailable

---

## 🔍 **Troubleshooting Common Issues**

### **Issue: No Events Appearing in Console**
**Possible Causes**:
- Ad blocker is blocking Triple Whale scripts
- JavaScript errors preventing event firing
- Page not fully loaded before testing

**How to Debug**:
1. Disable ad blockers and browser privacy extensions
2. Check Network tab for blocked requests to `config-security.com`
3. Look for JavaScript errors in Console tab
4. Wait 3-5 seconds after page load before testing
5. Try in incognito/private browsing mode

---

### **Issue: Network Requests Failing**
**Possible Causes**:
- CORS policy blocking requests
- Triple Whale servers temporarily unavailable
- Network connectivity issues

**How to Debug**:
1. Check Network tab for failed requests (red entries)
2. Look at response codes (should be 200 for success)
3. Try testing from different network/location
4. Check if other analytics tools are working

---

### **Issue: Events Fire But Don't Include User Data**
**Possible Causes**:
- Form validation preventing data capture
- Timing issues (event fires before form data available)
- JavaScript errors during form processing

**How to Debug**:
1. Verify form submission completes successfully first
2. Check that form fields have correct names/values
3. Test with simple, valid form data
4. Monitor console during entire form submission process

---

### **Issue: Website Breaks When Testing**
**Possible Causes**:
- JavaScript errors from tracking code
- Browser compatibility issues
- Conflicting browser extensions

**How to Debug**:
1. Test in multiple browsers (Chrome, Firefox, Safari)
2. Disable all browser extensions
3. Check Console for uncaught JavaScript errors
4. Test basic functionality without developer tools open

---

### **Browser Console Testing Commands**
Use these commands in browser console for manual testing:

```javascript
// Check if Triple Whale is loaded
console.log(typeof window.TriplePixel)
// Should return "function"

// Check Triple Whale configuration
console.log(window.TriplePixelData)
// Should show configuration object

// Test manual event firing
window.TriplePixel('Contact', { email: 'test@example.com' })
// Should trigger a contact event manually
```

---


