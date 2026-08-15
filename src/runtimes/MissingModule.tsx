import React from "react";

type MissingModuleProps = {
  id: string;
};

const MissingModule = ({ id }: MissingModuleProps) => {
  return (
    <div className="empty-stage">
      <div>
        <h2 className="page-title">Модуль не подключён</h2>
        <p className="muted" style={{ marginTop: 12 }}>
          {id}
        </p>
      </div>
    </div>
  );
};

export default MissingModule;
