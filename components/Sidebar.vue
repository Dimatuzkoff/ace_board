<script lang="ts" setup>
import { useIsLoadingStore, useAuthStore } from "~/store/auth.store";

const store = useAuthStore();
const isLoadingStore = useIsLoadingStore();
const router = useRouter();

async function logout() {
  isLoadingStore.set(true);
  await account.deleteSession("current");
  store.clear();
  await router.push("/login");
  isLoadingStore.set(false);
}
</script>

<template>
  <aside class="px-5 py-8 bg-sidebar h-full relative w-full">
    <NuxtLink to="/" class="mb-10 block">
      <NuxtImg src="/logo.svg" alt="logo" width="120px" class="mx-auto" />
    </NuxtLink>
    <!-- <UiButton>Send</UiButton> -->
    <button
      class="absolute top-2 right-3 transition-colors hover:text-primary"
      @click="logout"
    >
      <Icon name="line-md:logout" size="20" />
    </button>
    <LayoutMenu />
  </aside>
</template>