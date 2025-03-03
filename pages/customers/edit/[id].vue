<script lang="ts" setup>
import { storage } from "~/utils/appwrite";
import { useMutation, useQuery } from "@tanstack/vue-query";
import { v4 as uuid } from "uuid";
import { COLLECTION_CUSTOMERS, DB_ID, STORAGE_ID } from "~/app.constants";
import type { ICustomer } from "~/types/deals.types";
</script>

<template>
  <div></div>
</template>
