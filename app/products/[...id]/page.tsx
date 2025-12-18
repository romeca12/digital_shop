async function page({ params }: { params: Promise<{ id: string[] }> }) {
  const { id }: { id: string[] } = await params

  const items = id || []

  return (
    <>
      <div>
        {items.map((i, index) => (
          <p key={index}>{i}</p>
        ))}
      </div>
      <div>{id} dynamic router</div>
    </>
  )
}

export default page