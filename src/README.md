# Algorithms: Find the Symmetric Difference

A FreeCodeCamp Coding Interview Prep Question

Initial Goal: Create a function that takes two or more Lists and returns an List of the symmetric difference (△ or ⊕) of the provided Lists.

Fullstack Goal: A user should be able to create two or more lists, preview them and then submit them, which after the form provides the symmetric difference of the lists.

How I would break down the tasks:

1. Create a form where users can input a number, boolean or string into 2 or more lists.

- Allow only one choice at a time
- Add to List
  - Allow a maximum of 10 items per list
  - Show a new input for the chosen type
    - Number: text input
    - boolean: radio input
    - string: text input
- Remove from list
  - Remove button in preview beside each item

1. Show a preview of each list before submitting them.

- Lists 1 and 2 begin empty
- Title: Preview
- Lists should be in a row instead of a column
- 4 lists per row

1. Allow them to add more than 2 lists if wanted.

- At least two lists are required
- At most 12 lists can be made
- Add a list
  - Adds a list choice in Lists
  - Adds the list to preview
  - Add list button disappears when there are 12 lists showing.
- Remove a list
  - Remove button in preview beside each list title
    - Adjust List titles after removing a list from the beginning
  - Removes the list choice in lists
  - Removes the list in preview
  - Remove list button disappears when there are fewer than 3 lists

1. Find the symmetric difference between all lists used.

- "Find the difference" button
  - Disable the Find a Diff button if only 1 list is populated
  - Tool tip while button is disabled directs user to fill the second list before submitting
- Show the resulting list below the button
