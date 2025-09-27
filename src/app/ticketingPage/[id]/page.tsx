import React from "react";

type TicketIdProps = {
  params: {
    id: string;
  };
};

const TicketId = ({ params }: TicketIdProps) => {
  return <div>Ticketing id TicketId {params.id}</div>;
};

export default TicketId;
