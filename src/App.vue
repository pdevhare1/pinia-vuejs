<template>
  <div class="app">
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style>
.app {
  text-align: center;
}
.home {
  text-align: center;
  font-size: 5rem;
  margin: 1.5rem;
}

.btn button {
  font-size: 1.5rem;
  margin: 0.5rem;
}
.count {
  font-size: 5rem;
  margin: 1.5rem;
}
</style>
