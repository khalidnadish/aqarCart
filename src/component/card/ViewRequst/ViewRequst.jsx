import React from "react";
import cpm from "./Viewcpm";
function ViewRequst({ data }) {
  return (
    <>
      {/* ----------------------------------------------------- */}
      <cpm.FieldSet>
        <cpm.ItemTxtWraper dsn="row">
          <cpm.FieldSet>


            <cpm.Text>رقم العرض</cpm.Text>
            <cpm.TextData>{data.id}</cpm.TextData>


            <cpm.HeaderTypeWarper type={data.type}>
              <cpm.TextData>{data.type}</cpm.TextData>
            </cpm.HeaderTypeWarper>
            
          </cpm.FieldSet>
        </cpm.ItemTxtWraper>
      </cpm.FieldSet>
          <cpm.TextData border="yes">{data.header}</cpm.TextData>
      {/* ----------------------------------------------------- */}
      <cpm.ItemTxtWraper></cpm.ItemTxtWraper>
      {/* ----------------------------------------------------- */}

      <cpm.FormContainer>
        <cpm.FormStyle>
          <cpm.FieldSet>
            <cpm.InputText placeholder="الاسم" />
            <cpm.InputText type="number" placeholder="الجوال" />
          </cpm.FieldSet>
          <cpm.FieldSet>
            <cpm.InputText placeholder="الوقت" />
            <cpm.InputText placeholder="اليوم" />
          </cpm.FieldSet>
          <cpm.InputText placeholder="السعر" />
        </cpm.FormStyle>
        <cpm.Btn>ارسال</cpm.Btn>
      </cpm.FormContainer>
    </>
  );
}

export default ViewRequst;
