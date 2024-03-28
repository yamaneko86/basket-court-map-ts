import CourtsList from "@/_components/CourtsList";

export default function Chubu() {
	return (
		<main>
			<CourtsList lower_limit={15} upper_limit={23} />
		</main>
	);
}
