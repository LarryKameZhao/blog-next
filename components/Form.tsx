import React from 'react';
type Props = {
  fields: {
    label: string;
    type: 'text' | 'password';
    value: string | number;
  }[];
};
export const Form: React.FC<Props> = (props) => {
  return (
    <form>
      {props.fields.map((field, index) => {
        return (
          <div key={index}>
            <label>
              {field.label}
              <input type={field.type} />
            </label>
          </div>
        );
      })}
    </form>
  );
};
