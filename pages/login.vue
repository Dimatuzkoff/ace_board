<script setup lang="ts">
useSeoMeta({
  title: "Login | CRM System",
});

const emailRef = ref("");
const passwordRef = ref("");
const nameRef = ref("");

// watch(emailRef, () => {
//   console.log(emailRef.value);
// });
</script>
<template>
  <div class="flex items-center justify-center min-h-screen w-full">
    <div class="rounded bg-sidebar w-1/4 p-5">
      <h1 class="text-2xl font-bold text-center mb-5">Login</h1>
      <form>
        <UiInput
          placeholder="Email"
          type="email"
          class="bm-3"
          v-model="emailRef"
        />
        <UiInput
          placeholder="Password"
          type="password"
          class="bm-3"
          v-model="passwordRef"
        />
        <UiInput
          placeholder="Name"
          type="name"
          class="bm-3"
          v-model="nameRef"
        />
        <div class="flex items-center justify-center gap-5">
          <UiButton>Login</UiButton>
        </div>
      </form>
    </div>
  </div>
</template>