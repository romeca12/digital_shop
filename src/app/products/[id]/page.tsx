async function page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return <div>{id} dynamic router</div>;
}

export default page;
