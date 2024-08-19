import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
  } from "@/components/ui/table"

interface Customer {
	name: string;
	email: string;
	id: number;
}

export default function CustomersTable({
	customers,
}: {
	customers: Customer[];
	}) {
	
	const deleteCustomer = async (id: number) => { 
		try {
			const request = await fetch(`/api/customers?id=${id}`, {
				method: "DELETE",
			});
			const response = await request.json();
			alert(response.message);
		} catch (err) {
			console.log(err);
		}
	}
	return (
		<Table className="w-full text-left">
			<TableHeader className="bg-gray-400">
				<TableRow>
					<TableHead className="text-black font-bold text-[18px]">Name</TableHead>
					<TableHead className="text-black font-bold text-[18px]">Email</TableHead>
					<TableHead className="text-black font-bold text-[18px]">Action</TableHead>
				</TableRow>
			</TableHeader>

			<TableBody>
			{customers.length > 0 && customers.map((customer) => (
					<TableRow key={customer.id}>
						<TableCell className='text-sm'>{customer.name}</TableCell>
						<TableCell className='text-sm'>{customer.email}</TableCell>
						<TableCell className='text-sm'>
							<button className='p-2 bg-red-500 text-red-50  text-xs rounded-sm' onClick={()=> deleteCustomer(customer.id)}>
								Delete
							</button>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}