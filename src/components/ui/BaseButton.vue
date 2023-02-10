<template lang="pug">
button 
  slot
</template>

<style scoped lang="scss">
button {
    background-color: var(--purple);
    padding: 10px 30px;
    font-weight: 600;
    font-size: 12px;
    color: var(--white);
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease-out;

    &:hover {
      transform: translateY(-5px);
    }
}
</style>