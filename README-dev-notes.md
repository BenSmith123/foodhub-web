# EatClub Web Frontend Technical Challenge

I've dump notes, todos, thought process here as I work on the project.

### Assumptions

- Challenge didn't specify if AI could be used. I've assumed that it shouldn't be used for anything other than simple tooling, mundane tasks etc. I don't want to completely rule out the use of AI as it is an engineering productivity tool.

If I use AI I'll clearly indicate where and note why

### Things to keep in mind

- Don't over-complicate or over-engineer things
- Timebox 2-3 hours
- USE REGULAR COMMITS
- Performance, best standards, a11y,

### Requirements

- React
- Mobile first
- Desktop responsive (bonus points!)

- Don't have to match the screenshots exactly
- No need to implement the “Menu/Call Us/Location/Favourite” button actions

### Considerations (before starting)

**Code formatting**

- typescript - strict
- prettier/eslint - yes plz, saves me time mucking around with indentation etc.

**Tooling**

- nextjs or react SSR - no, overkill
- schema validation? zod? might be useful but might be overkill? check the API data types to confirm

**Styles**

- tailwind? - might not be worth adding
- styled components? - I do really like but setup might kill time + performance impact
- css modules?

**Tests**

- Yes, probably a good idea but aren't actually part of the requirements - add later if you have time
- Visual regression, cypress/playwright tests - no, overkill

**State**

- redux is overkill
- zustand is probably overkill too

**Out of scope**

- CI/CD

# AI USEAGE

- I've marked the AI useage with code comments prefixed with "AI: ..."

# Final notes - whats missing, next steps

- use an icon library instead of emojis
- ADD TESTS
  - especially to the logic in helpers
  - might be scenarios that can cause issues if missing data
- Search debouncin & no results component
- loading state designs
- failure designs
- apply bold font where needed
- remove hardcoded "Takeaway · Order online" with real data
-
