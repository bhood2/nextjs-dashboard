import Table from "@/app/ui/customers/table"
import { Metadata } from "next";
import { Suspense } from "react";
import { CustomersTableSkeleton } from "@/app/ui/skeletons";
import { fetchFilteredCustomers } from "@/app/lib/data";

export const metadata: Metadata = {
	title: 'Customers',
};

export default async function Page(props: {
	searchParams?: Promise<{
		query?: string;
		page?: string;
	}>;
}) {
	const searchParams = await props.searchParams;
	const query = searchParams?.query || '';
	const customers = await fetchFilteredCustomers(query);

	return (
		<Suspense key={query} fallback={<CustomersTableSkeleton />}>
				<Table customers={customers} />
		</Suspense>
	);
}