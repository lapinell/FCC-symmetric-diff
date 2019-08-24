# Algorithms: Find the Symmetric Difference

A FreeCodeCamp Coding Interview Prep Question

Initial Goal: Create a function that takes two or more Lists and returns an List of the symmetric difference (△ or ⊕) of the provided Lists.

Fullstack Goal: A user should be able to create two or more lists, preview them and then submit them, which after the form provides the symmetric difference of the lists.

How I would break down the tasks:

1. Create a form where users can input a number, boolean or string into 2 or more lists.

- Allow only one choice at a time
- Add to List
- Remove from list

1. Show a preview of each list before submitting them.

- Lists 1 and 2 begin empty
- Title: Preview
- Lists should be in a row instead of a column
- 4 lists per row

1. Allow them to add more than 2 lists if wanted.

- Add a list
  - Adds a list choice in Lists
  - Adds the list to preview
- Remove a list
  - Removes the list choice in lists
  - Removes the list in preivew
- At least two lists are required
  - An error shows when the user attempts to remove the second list
- At most 12 lists can be made
  - An error shows when the user attempts to add more than 12 lists

1. Find the symmetric difference between all lists used.

- "Find the difference" button
- Show the result below the button
  - Show an error if only 1 list has items.
