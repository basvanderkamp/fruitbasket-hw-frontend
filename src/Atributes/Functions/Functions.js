import React from 'react';

export function addOne(fruit, setFruit) {
    setFruit(fruit +1);
}

export function minOne(fruit, setFruit) {
    if (fruit === 0) {
        alert("you can not go below zero");
        return
    }
    setFruit(fruit -1);
}

export function resetCount(setFruit1, setFruit2, setFruit3, setFruit4) {
    setFruit1(0);
    setFruit2(0);
    setFruit3(0);
    setFruit4(0);
}