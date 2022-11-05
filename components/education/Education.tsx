import React, { FC } from "react";
import { Grid, Table } from "@nextui-org/react";
import en from "../../lang/en.json";
import es from "../../lang/es.json";
import { useRouter } from "next/router";
import { IColumn, IItem, IMessage } from "../../interfaces";

const languages: IMessage = {
  es,
  en,
};

const Education: FC = () => {
  const router = useRouter();
  const locale = router.locale || "es";
  const { educationList, educationHead } = languages[locale];

  return (
    <Grid.Container gap={2} justify="center" xs={10}>
      <Table
        aria-label="Table of education"
        bordered={true}
        css={{
          height: "auto",
          minWidth: "100%",
        }}
      >
        <Table.Header columns={educationHead}>
          {(column: IColumn) => (
            <Table.Column
              key={column.key}
              aria-labelledby={`column-${column.key}`}
            >
              {column.label}
            </Table.Column>
          )}
        </Table.Header>
        <Table.Body items={educationList}>
          {(item: IItem) => (
            <Table.Row key={item.key} aria-labelledby={`row-${item.key}`}>
              {(columnKey) => (
                <Table.Cell
                  aria-labelledby={`cell-${item.key}-${item[columnKey]}`}
                >
                  {item[columnKey]}
                </Table.Cell>
              )}
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </Grid.Container>
  );
};

export default Education;
