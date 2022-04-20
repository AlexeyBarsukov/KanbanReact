
// @ts-ignore
function MyCard({ card }) {
  return (
    <>
      <div style={{ margin: '10px', background: '#fff', boxShadow: '0 1px 0 #091e4240', borderRadius: '3px' }}>{card.content}</div>
    </>
  )
};

export default MyCard;