import Table from "@/app/ui/customers/table"
import Search from "@/app/ui/search";
import { Metadata } from "next";
import { Suspense } from "react";

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

	return <p>Customer Page</p>;
}