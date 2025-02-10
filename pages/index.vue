<script lang="ts" setup>
import type { ICard, IColumn } from "~/components/kanban/kanban.types";
useSeoMeta({
  title: "Home | CRM ACE - BOARD",
});

const dragCardRef = ref<ICard | null>(null);
const sourceColumnRef = ref<IColumn | null>(null);
</script>

<template>
  <div class="p-10">
    <h1 class="font-bold text-2x1 mb-10">CRM System "ACE BOARD"</h1>
    <div class="">
      <UiCard class="mb-3" draggable="true">
        <UiCardHeader role="button">name card</UiCardHeader>
        <UiCardContent> Компания </UiCardContent>
        <UiCardFooter> Date </UiCardFooter>
      </UiCard>
    </div>
  </div>
</template>