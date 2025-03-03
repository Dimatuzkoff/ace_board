<script setup lang="ts">
import { useDealSlideStore } from "~/store/deal-slide.store";
import dayjs from "dayjs";
import type { IDeal } from "~/types/deals.types";
import { useComments } from "./useComments";
import { useCreateComment } from "./useCreateComment";

const store = useDealSlideStore();
const { data, refetch, isLoading } = useComments();
const { commentRef, writeComment } = useCreateComment({ refetch });

const card = data as unknown as IDeal;
</script>
<template>
  <UiInput
    placeholder="Оставьте комментарий"
    v-model="commentRef"
    @keyup.enter="writeComment"
  />
</template>