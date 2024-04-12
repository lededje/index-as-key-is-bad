### Index as keys are bad

Use the dev container (or just run with local node if you're a mad lad) and run `yarn dev`.

Visit localhost:3000 and mash the randomzie button a few times and observe the differences.

Index as key: The props are changed but the component isn't destroyed so the name moves to the correct position but the number does not.

Name as key: Correctly reorder, moving the name and state to it's new position